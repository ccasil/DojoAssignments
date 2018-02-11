from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def tmnt():
  return render_template('index.html')

@app.route('/ninja')
def ninja():
  return render_template('ninja.html')

@app.route('/ninja/<color>')
def color(color):
	if color == 'blue':
		c = 'leonardo.jpg'
  		return render_template('color.html', color=c)
  	if color == 'orange':
		c = 'michelangelo.jpg'
  		return render_template('color.html', color=c)
  	if color == 'red':
		c = 'raphael.jpg'
  		return render_template('color.html', color=c)
  	if color == 'purple':
		c = 'donatello.jpg'
  		return render_template('color.html', color=c)
  	else:
		c = 'notapril.jpg'
  		return render_template('color.html', color=c)

app.run(debug=True)