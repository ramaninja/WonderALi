from flask import Flask, render_template, jsonify
import psycopg2

app = Flask(__name__)

def recup(user):
    conn = psycopg2.connect(
        host="localhost",
        database="Products",
        user="user",
        password="user")
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


compare('Marcel', 'password')
    