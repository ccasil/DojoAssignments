from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def entername():
	return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
	print "in process route"
	name = request.form['name']
	location = request.form['location']
	language = request.form['language']
	description = request.form['description']
	return render_template('/process.html', name=name, location=location, language=language, description=description )
	# return redirect('/result') #never render post

# @app.route('/result')
# def result():
# 	return render_template('/process.html', name=name, location=location, language=language, description=description )
app.run(debug=True)