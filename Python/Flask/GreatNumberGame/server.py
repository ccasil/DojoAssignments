from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'myname'
@app.route('/')

def rand():
	if "someKey" in session:
		session['someKey'] = session['someKey']
	else:
		session['someKey'] = random.randrange(0,101)
	print "THIS IS THE ANSWER:", session['someKey']
	# attempt = session['attempt']
	return render_template('index.html', attempt=session['attempt'])

@app.route('/process', methods=['POST'])
def process():
	guess = int(request.form['guess'])
	# session['attempt'] = ""
	print "THIS IS YOUR GUESS:", guess
	if guess < session['someKey']:
		session['attempt'] = "Too low!"
	elif guess > session['someKey']:
		session['attempt'] = "Too high!"
	else:
		session['attempt'] = "Correct!"
	return redirect ('/')

@app.route('/reset', methods=['POST'])
def reset():
	session['someKey'] = random.randrange(0,101)
	return redirect ('/')

app.run(debug=True)