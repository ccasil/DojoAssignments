from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)
app.secret_key = 'myname'

@app.route('/')
def entername():
	# return render_template('index.html')
	return render_template('index.html', name=session['name'], location=session['location'], language=session['language'], description=session['description'])

@app.route('/process', methods=['POST'])
def process():
	if len(request.form['name']) < 1:
		#display validation errors
		flash("Name cannot be empty!")
	elif len(request.form['description']) > 120:
		flash("Comment is longer than 120 characters!")
	elif len(request.form['name']) < 1 and len(request.form['description']) > 120:
		flash("Name cannot be empty!")
		flash("Comment is longer than 120 characters!")
	else:
		#display success message
		flash("Success! Your name is {}".format(request.form['name']))
	session['name'] = request.form['name']
	session['location'] = request.form['location']
	session['language'] = request.form['language']
	session['description'] = request.form['description']
	# print "in process route"
	# name = request.form['name']
	# location = request.form['location']
	# language = request.form['language']
	# description = request.form['description']
	# return render_template('/process.html', name=name, location=location, language=language, description=description )
	return redirect('/')

# @app.route('/result')
# def result():
# 	return render_template('/process.html', name=name, location=location, language=language, description=description )
app.run(debug=True)