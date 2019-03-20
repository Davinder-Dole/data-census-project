from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/census')
def census():
    return render_template('census.html')

if __name__ == '__main__':
    app.run(debug=True)