from flask import Flask, render_template  # Import Flask to allow us to create our app, and import
                                          # render_template to allow us to render index.html.
app = Flask(__name__)                     # Global variable __name__ tells Flask whether or not we
                                          # are running the file directly or importing it as a module.
@app.route('/')                           # The "@" symbol designates a "decorator" which attaches the
                                          # following function to the '/' route. This means that
                                          # whenever we send a request to localhost:5000/ we will run
                                          # the following "hello_world" function.
def index():
  return render_template('portfolio1.html')    # Render the template and return it!
					                     # Run the app in debug mode.

@app.route('/projects')
def projects():
  return render_template('portfolio2.html')

@app.route('/about')
def abou():
  return render_template('portfolio3.html')
app.run(debug=True)