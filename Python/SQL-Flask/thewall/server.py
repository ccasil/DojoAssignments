from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import re
import md5

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'myname'
password = 'password'
mysql = MySQLConnector(app,'wall')

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/wall')
def wall():
		query = "SELECT messages.id, message, comments.comment, comments.message_id, CONCAT(first_name, ' ', last_name) AS name, messages.created_at, comments.created_at FROM messages JOIN users ON messages.user_id = users.id LEFT JOIN comments ON messages.id = comments.message_id;"
		data = mysql.query_db(query)
		return render_template('wall.html', data=data)

@app.route('/login', methods=['POST'])
def login():
	if len(request.form['email']) < 1 and len(request.form['password']) < 1:
		flash("Make sure all fields are filled")
		return redirect('/loginregistration')
	else:
		query = "SELECT * FROM users where (users.email = :email AND users.password = :password)"
		data = { 
			'email': request.form['email'], 
			'password': md5.new(request.form['password']).hexdigest()
		}
		user = mysql.query_db(query, data)
		if len(user) < 1:
			flash("Incorrect login information")
			return redirect('/loginregistration')
		else:
			session['first_name'] = user[0]['first_name']
			session['id'] = user[0]['id']
			flash("Thanks for logging in")
			return redirect('/wall')

@app.route('/register', methods=['POST'])
def register():
	if len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1 or len(request.form['email']) < 1 or len(request.form['password']) < 1 or len(request.form['cpassword']) < 1:
		flash("Make sure all fields are filled")
		return redirect ('/loginregistration')
	elif  not EMAIL_REGEX.match(request.form['email']):
		flash("Invalid Email Address!")
		return redirect ('/loginregistration')
	elif len(request.form['password']) < 8 or len(request.form['cpassword']) < 8:
		flash("Password must be at least 8 characters")
		return redirect ('/loginregistration')
	elif request.form['password'] != request.form['cpassword']:
		flash("Password does not match")
		return redirect ('/loginregistration')
	elif not NAME_REGEX.match(request.form['first_name']) or not NAME_REGEX.match(request.form['last_name']):
		flash("Name must not contain any numbers!")
		return redirect ('/loginregistration')
	elif request.form['password'] != request.form['cpassword']:
		flash("Passwords do not match!")
		return redirect ('/loginregistration')
	else:
		flash("Thanks for submitting your information")
		query = "INSERT INTO users (first_name, last_name, email, password, cpassword) VALUES (:first_name, :last_name, :email, :password, :cpassword)"
    	data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email'],
             'password': md5.new(request.form['password']).hexdigest(),
             'cpassword': md5.new(request.form['password']).hexdigest()
             }
    	mysql.query_db(query, data)
    	return redirect('/wall')

@app.route('/message', methods=['POST'])
def message():
	query = "INSERT INTO messages (message, user_id, created_at) VALUES (:message, :user_id, NOW())"
	data = {
		'message': request.form['message'],
		'user_id': request.form['hiddenmid']
	}
	mysql.query_db(query, data)
	return redirect('/wall')

@app.route('/comment', methods=['POST'])
def comment():
	query = "INSERT INTO comments (comment, user_id, message_id, created_at) VALUES (:comment, :user_id, :message_id, NOW())"
	data = {
		'comment': request.form['comment'],
		'user_id': request.form['hiddencid'],
		'message_id': request.form['hiddenmid']
	}
	mysql.query_db(query, data)
	return redirect('/wall')

@app.route('/loginregistration')
def loginregistration():
	return render_template('loginregister.html')

@app.route('/logout')
def logout():
	session.clear()
	return redirect('/')

app.run(debug=True)