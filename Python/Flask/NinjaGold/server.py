from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'myname'
@app.route('/')
def index():
	if "gold" in session:
		session["gold"] = session['gold']
	else:
		session["gold"] = 0
	return render_template('index.html', gold=session["gold"])

@app.route('/process_money', methods=['POST'])
def process():
	if "message" not in session:
		session["message"] = []

	if request.form['building'] == "farm":
		session["rand"] = random.randrange(10,21)
		session["gold"] += session["rand"]
		session["message"].append("Earned "+ str(session["rand"])+ " gold from the farm!")
	elif request.form['building'] == "cave":
		session["rand"] = random.randrange(5,11)
		session["gold"] += session["rand"]
		session["message"].append("Earned "+ str(session["rand"])+ " gold from the cave!")
	elif request.form['building'] == "house":
		session["rand"] = random.randrange(2,6)
		session["gold"] += session["rand"]
		session["message"].append("Earned "+ str(session["rand"])+ " gold from the house!")
	elif request.form['building'] == "casino":
		session["rand"] = random.randrange(-50,50)
		session["gold"] += session["rand"]
		session["message"].append("Earned "+ str(session["rand"])+ " gold from the casino!")
	return redirect ('/')

@app.route('/reset', methods=['POST'])
def reset():
	session["gold"] = 0
	session["message"] = []
	return redirect ('/')

# @app.route('/farm', methods=['POST'])
# def farm():
# 	session["gold"] += random.randrange(10,21)
# 	return redirect ('/')

# @app.route('/cave', methods=['POST'])
# def cave():
# 	session["gold"] += random.randrange(5,11)
# 	return redirect ('/')

# @app.route('/house', methods=['POST'])
# def house():
# 	session["gold"] += random.randrange(2,6)
# 	return redirect ('/')

# @app.route('/casino', methods=['POST'])
# def casino():
# 	session["gold"] += random.randrange(-50,50)
# 	return redirect ('/')

app.run(debug=True)