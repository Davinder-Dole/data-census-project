from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def main():
    return redirect(url_for('static_index'))

@app.route('/static/index.html')
def static_index():
    return render_template('index.html')

@app.route('/static/census.html')
def census_index():
    return render_template('census2.html')

@app.route('/census')
def census():
    return redirect(url_for('census_index'))

if __name__ == '__main__':
    app.run(debug=True)