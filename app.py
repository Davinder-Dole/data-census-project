from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def main():
    return redirect(url_for('static_index'))

@app.route('/static/index.html')
def static_index():
    return render_template('index.html')

@app.route('/census')
def census():
    return render_template('census.html')

if __name__ == '__main__':
    app.run(debug=True)