from flask_restful import Resource
from flask import request
from .app import api, db
from .models import User, Store
from .auth import *


class SignUp(Resource):
    def post(self):
        try:
            data = request.form
            new_user = User(username=data['username'],
                            email=data['email'],
                            name=data['name'],
                            last_name=data['last_name'],
                            password=generate_password_hash(data['password']))
            db.session.add(new_user)
            db.session.commit()

            return {'status': 'ok',
                    'user': new_user.to_dict(rules=('-password', '-id', '-comments', '-store')),
                    'token': encode_auth_token(new_user.id, new_user.username).decode()}, 201
        except Exception as e:
            return {'status': 'fail', 'message': str(e)}, 500


class Login(Resource):
    def post(self):
        try:
            data = request.form
            user = User.query.filter_by(username=data['username']).first()

            if user is None:
                raise Exception('Invalid username')

            if check_password_hash(data['password'], user.password):
                token = encode_auth_token(user.id, user.username).decode()

                return {'status': 'ok',
                        'user': user.to_dict(rules=('-password', '-id', '-comments', '-store')),
                        'token': token}, 200
            else:
                raise Exception('Invalid password or username')
        except Exception as e:
            return {'status': 'fail', 'message': str(e)}, 401


class Logout(Resource):
    def post(self):
        try:
            pass
        except Exception as e:
            pass


class CreateStore(Resource):
    def post(self):
        try:
            auth_header = request.headers.get('Authorization')
            auth_token = auth_header.split(" ")[1]

            user_payload = decode_auth_token(auth_token)

            user = User.query.get(user_payload['sub'])
            if not user:
                raise Exception('Username not found')

            store = request.form

            new_store = Store(name=store['name'],
                              category=store['category'],
                              description=store['description'],
                              departamento=store['departamento'],
                              user=user,
                              user_id=user.id)
            # new_store.user_id = user.id

            if not new_store:
                raise Exception('Failed to create a new Store')

            db.session.add(new_store)
            db.session.commit()

            return {'status': 'ok',
                    'store': new_store.to_dict(rules=('-user', '-user_id', '-products')),
                    'user': user.to_dict(rules=('-password', '-id', '-comments', '-store'))}
        except Exception as e:
            print(str(e))
            return {'status': 'fail', 'message': str(e)}, 401


# ENDPOINTS
api.add_resource(SignUp, '/api/signup')
api.add_resource(Login, '/api/login')
# api.add_resource(Logout, '/api/logout')
api.add_resource(CreateStore, '/api/createStore')
