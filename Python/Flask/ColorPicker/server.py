from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'myname'

@app.route('/')
def color():
	# return render_template('index.html')
	# if "red" not in session:
	# 	session['red'] = 0
	# elif "green" not in session:
	# 	session['green'] = 0
	# elif "blue" not in session:
	# 	session['blue'] = 0
	# else:
	# 	session['red'] = session['red']
	# 	session['green'] = session['green']
	# 	session['blue'] = session['blue']
	return render_template('index.html', r=session['red'], g=session['green'], b=session['blue'])

@app.route('/process', methods=['POST'])
def process():
	session['red'] = request.form['red']
	session['green'] = request.form['green']
	session['blue'] = request.form['blue']
	return redirect('/')

app.run(debug=True)