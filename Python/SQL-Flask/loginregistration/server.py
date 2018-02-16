from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import re
import md5

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'myname'
password = 'password'
mysql = MySQLConnector(app,'logreg')

@app.route('/')
def index():
	query = "SELECT id, first_name, last_name, email, password, cpassword FROM logins"
	loginfo = mysql.query_db(query)
	return render_template('index.html', loginfo=loginfo)

@app.route('/login', methods=['POST'])
def login():
	if len(request.form['email']) < 1 and len(request.form['password']) < 1:
		flash("Make sure all fields are filled")
		return redirect('/')
	else:
		query = "SELECT * FROM logins where (logins.email = :email AND logins.password = :password)"
		data = { 
			'email': request.form['email'], 
			'password': md5.new(request.form['password']).hexdigest()
		}
		user = mysql.query_db(query, data)
		if len(user) < 1:
			flash("Incorrect login information")
			return redirect('/')
		else:
			flash("Thanks for logging in")
			return redirect('/success')

@app.route('/register', methods=['POST'])
def register():
	if len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1 or len(request.form['email']) < 1 or len(request.form['password']) < 1 or len(request.form['cpassword']) < 1:
		flash("Make sure all fields are filled")
		return redirect ('/')
	elif  not EMAIL_REGEX.match(request.form['email']):
		flash("Invalid Email Address!")
		return redirect ('/')
	elif len(request.form['password']) < 8 or len(request.form['cpassword']) < 8:
		flash("Password must be at least 8 characters")
		return redirect ('/')
	elif request.form['password'] != request.form['cpassword']:
		flash("Password does not match")
		return redirect ('/')
	elif not NAME_REGEX.match(request.form['first_name']) or not NAME_REGEX.match(request.form['last_name']):
		flash("Name must not contain any numbers!")
		return redirect ('/')
	elif request.form['password'] != request.form['cpassword']:
		flash("Passwords do not match!")
		return redirect ('/')
	else:
		flash("Thanks for submitting your information")
		query = "INSERT INTO logins (first_name, last_name, email, password, cpassword) VALUES (:first_name, :last_name, :email, :password, :cpassword)"
    	data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email'],
             'password': md5.new(request.form['password']).hexdigest(),
             'cpassword': md5.new(request.form['password']).hexdigest()
             }
    	mysql.query_db(query, data)
    	return redirect('/success')

@app.route('/success')
def success():
	return render_template('success.html')

app.run(debug=True)