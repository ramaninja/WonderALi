from flask import Flask, render_template, jsonify
import psycopg2

app = Flask(__name__)

def recup(user):
    conn = psycopg2.connect(
        host="pg-service",
        database="postgres",
        user="postgres",
        password="postgres")
    print("Connection Established")
    cur = conn.cursor()
    cur.execute('SELECT * FROM public."Users" ORDER BY "User_Id" ASC')
    rows = cur.fetchall()
    for row in rows:
        print(row[0], row[1])
    return rows

def compare(user, password): 
    db_row = recup('Marcel')
    for row in db_row:
        if(row[2] == password):
            print("C'est le bon mot de passe")
        else:
            print("Pas le bon mot de passe")

@app.route('/api_test')
def test():
    db_row = recup('Marcel')
    return jsonify(username=db_row[0][1], mdp=db_row[0][2])

#compare('Marcel', 'password')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)