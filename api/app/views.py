from flask_restful import Resource
from flask import request
from .app import api, db
from .models import User, Store, Product, Comments
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
            user = check_user_session(request)

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
        except jwt.ExpiredSignatureError as e:
            return {'status': 'fail',
                    'message': str(e)}, 401
        except Exception as e:
            print(str(e))
            return {'status': 'fail', 'message': str(e)}, 400


class GetStore(Resource):
    def get(self, store_id):
        try:
            store = Store.query.get(store_id)

            store_dict = store.to_dict(rules=('-products', '-user'))
            store_dict['user'] = store.user.to_dict(rules=('-password', '-id', '-comments', '-store'))
            store_dict['products'] = [product.to_dict(rules=('-comments', '-store')) for product in store.products]

            return {'status': 'ok',
                    'store': store_dict}, 200
        except AttributeError as e:
            return {'status': 'fail',
                    'message': 'This store does not exists'}, 404
        except Exception as e:
            return {'status': 'fail',
                    'message': str(e)}, 400


class CreateProduct(Resource):
    def post(self):
        try:
            user = check_user_session(request)

            if user.store is None:
                raise Exception("You need to create a Store first")

            product = request.form

            new_product = Product(name=product['name'],
                                  description=product['description'],
                                  price=product['price'],
                                  category=product['category'],
                                  date_added=datetime.now(),
                                  likes=0,
                                  image='null',
                                  store=user.store,
                                  store_id=user.store.id)

            db.session.add(new_product)
            db.session.commit()

            return {'status': 'ok',
                    'message': 'The product was added successfully',
                    'product': new_product.to_dict(rules=('-comments', '-store'))}, 200
        except jwt.ExpiredSignatureError as e:
            return {'status': 'fail',
                    'message': str(e)}, 401
        except Exception as e:
            return {'status': 'fail',
                    'message': str(e)}, 400


class GetProduct(Resource):
    def get(self, product_id):
        try:
            product = Product.query.get(product_id)

            product_dict = product.to_dict(rules=('-comments', '-store'))
            product_dict['comments'] = [comment.to_dict() for comment in product.comments]
            product_dict['store'] = product.store.to_dict(rules=('-products', '-user'))

            return {'status': 'ok',
                    'store': product_dict}, 200
        except AttributeError as e:
            return {'status': 'fail',
                    'message': 'This product does not exists'}, 404
        except Exception as e:
            return {'status': 'fail',
                    'message': str(e)}, 400


def check_user_session(request_):
    auth_header = request_.headers.get('Authorization')
    auth_token = auth_header.split(" ")[1]

    user_payload = decode_auth_token(auth_token)

    user = User.query.get(user_payload['sub'])
    if not user:
        raise Exception('Username not found')

    return user


# ENDPOINTS
api.add_resource(SignUp, '/api/signup')
api.add_resource(Login, '/api/login')
# api.add_resource(Logout, '/api/logout')
api.add_resource(CreateStore, '/api/createStore')
api.add_resource(GetStore, '/api/getStore/<string:store_id>')
api.add_resource(CreateProduct, '/api/createProduct')
api.add_resource(GetProduct, '/api/getProduct/<string:product_id>')
