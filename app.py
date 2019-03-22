from flask import Flask, render_template, redirect, url_for
from flask import Flask, render_template,request
import pandas as pd

app = Flask(__name__)

@app.route('/')
def main():
    return redirect(url_for('static_index'))

@app.route('/static/index.html')
def static_index():
    return render_template('index.html', page = 'index')

@app.route('/static/census.html')
def census_index():
    return render_template('index.html', page = 'census')

@app.route('/census')
def census():
    return redirect(url_for('census_index'))

@app.route('/static/malefemale.html')
def malefemale_index():
    return render_template('index.html', page = 'malefemale')

@app.route('/malefemale')
def malefemale():
    return redirect(url_for('malefemale_index'))

@app.route('/geodata')
def geodata():
    df = pd.read_csv('country.csv')
    year=request.args.get("year",1950)
    
    queryUrl = f"https://api.census.gov/data/timeseries/idb/5year?key=85ac64b6b5a9c0901b00329d1ef41f0c53ccfc98&get=NAME,POP,CBR,CDR,E0,AREA_KM2&FIPS&time={year}"
    df2 = pd.read_json(queryUrl)
    df2.columns = df2.iloc[0]
    df2.drop([0], inplace=True)
    merged = df.merge(df2, left_on='name', right_on='NAME')
    merged["POP"]=merged["POP"].astype(int)
    return merged.to_json(orient='records')

@app.route('/map')
def index():
    return render_template('index2.html')


if __name__ == '__main__':
    app.run(debug=True)