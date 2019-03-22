from flask import Flask, render_template,request
import pandas as pd
import humanize

app = Flask(__name__)

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

@app.route('/')
def index():
    return render_template('index2.html')

if __name__ == "__main__":
    app.run(debug=True, port=5001)
    