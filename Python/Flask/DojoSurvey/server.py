from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def entername():
	return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
	name = request.form['formname']
	return render_template('/process.html', processname=name)
	# return redirect('/')
app.run(debug=True)