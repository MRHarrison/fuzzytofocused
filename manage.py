# -*- coding: utf-8 -*-

from flask.ext.script import Manager

from fuzzytofocused import create_app
# from fuzzytofocused import app
# from fuzzytofocused.extensions import db
# from fuzzytofocused.user import User, UserDetail, ADMIN, ACTIVE
# from fuzzytofocused.utils import MALE


app = create_app()
manager = Manager(app)


@manager.command
def run():
    """Run in local machine."""
    app.run()


# @manager.command
# def initdb():
#     """Init/reset database."""

#     db.drop_all()
#     db.create_all()

#     admin = User(
#             name=u'admin',
#             email=u'mrussellharrison@gmail.com',
#             password=u'123456',
#             role_code=ADMIN,
#             status_code=ACTIVE,
#             user_detail=UserDetail(
#                 sex_code=MALE,
#                 age=10,
#                 url=u'http://admin.example.com',
#                 deposit=100.00,
#                 location=u'San Francisco',
#                 bio=u'admin Guy is ... hmm ... just a admin guy.'))
#     db.session.add(admin)
#     db.session.commit()


# manager.add_option('-c', '--config',
#                    dest="config",
#                    required=False,
#                    help="config file")

if __name__ == "__main__":
    manager.run()
