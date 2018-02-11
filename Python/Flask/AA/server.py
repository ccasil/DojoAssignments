from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

@app.route('/')
def some_function_name():
  return render_template('index.html')


app.run(debug=True)