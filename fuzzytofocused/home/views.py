from flask import (Blueprint, render_template, current_app, request,
                   flash, url_for, redirect, session, abort)


home = Blueprint('home', __name__)


@home.route('/')
def index():
    return render_template('index.html')
