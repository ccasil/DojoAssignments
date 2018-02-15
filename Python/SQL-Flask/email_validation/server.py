from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
mysql = MySQLConnector(app,'emailvalid')
app.secret_key = 'myname'

@app.route('/')
def index():
	query = "SELECT email, created_at FROM emails"
	data = mysql.query_db(query)
	return render_template('index.html', data=data)

@app.route('/email', methods=['POST'])
def create():
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    query = "INSERT INTO emails (email, created_at) VALUES (:email, NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'email': request.form['email']
           }
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/process', methods=['POST'])
def process():
	if not EMAIL_REGEX.match(request.form['email']):
		flash("Email is not valid!")
		return redirect('/')
	else:
		flash("The email address you entered is a VALID email address! Thank you!")
		return redirect('/success')

@app.route('/success')
def success():
	query = "SELECT email, created_at FROM emails"
	data = mysql.query_db(query)
	return render_template('success.html', data=data)

app.run(debug=True)