from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'myname'
password = 'password'
mysql = MySQLConnector(app,'users')

@app.route('/users')
def index():
    query = "SELECT id, CONCAT(first_name, ' ', last_name) AS name, email, created_at FROM users"
    data = mysql.query_db(query)
    return render_template('index.html', data=data)

@app.route('/create', methods=['POST'])
def create():
    if len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1 or len(request.form['email']) < 1:
        flash("Make sure all fields are filled")
        return redirect ('/users/new')
    elif  not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect ('/users/new')
    elif not NAME_REGEX.match(request.form['first_name']) or not NAME_REGEX.match(request.form['last_name']):
        flash("Name must not contain any numbers!")
        return redirect ('/users/new')
    else:
        flash("Thanks for submitting your information")
        query = "INSERT INTO users (first_name, last_name, email, created_at) VALUES (:first_name, :last_name, :email, NOW())"
        data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email']
             }
        mysql.query_db(query, data)
    return redirect('/users')

@app.route('/users/<ident>/edit')
def edit(ident):
    # query = "SELECT id FROM users WHERE id = " +ident
    # edit = mysql.query_db(query)
    # print edit[0]['id']
    return render_template('edit.html', edit=ident)

@app.route('/update/<ident>', methods=['POST'])
def update(ident):
    if len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1 or len(request.form['email']) < 1:
        flash("Make sure all fields are filled")
        return redirect ('/users/<ident>/edit')
    elif  not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect ('/users/<ident>/edit')
    elif not NAME_REGEX.match(request.form['first_name']) or not NAME_REGEX.match(request.form['last_name']):
        flash("Name must not contain any numbers!")
        return redirect ('/users/<ident>/edit')
    else:
        flash("Thanks for submitting your information")
        query = "UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'id': ident
        }
        mysql.query_db(query, data)
        return redirect('/users')

@app.route('/users/<ident>')
def delete(ident):
    query = "DELETE FROM users WHERE id = :id"
    data = {
        'id': ident
        }
    mysql.query_db(query, data)
    return redirect('/users')

@app.route('/users/<ident>/show')
def show(ident):
    query = "SELECT * FROM users WHERE id = " +ident 
    data = {
            'id': ident
        }
    user = mysql.query_db(query,data)
    first_name = user[0]['first_name']
    last_name = user[0]['last_name']
    email = user[0]['email']
    created_at = user[0]['created_at']
    return render_template('show.html', edit=ident, first_name=first_name, last_name=last_name, email=email, created_at=created_at)

@app.route('/users/new')
def addnew():
    return render_template('new.html')

@app.route('/goback')
def goback():
    return redirect('/users')

app.run(debug=True)