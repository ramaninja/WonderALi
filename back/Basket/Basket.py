from flask import Flask, render_template, jsonify, g 
import psycopg2

# gestion de la connexion à la BDD
# voir : https://flask.palletsprojects.com/en/0.12.x/tutorial/dbcon/
def get_db():
    if not hasattr(g, "dbConn"):
        g.dbConn = psycopg2.connect(
            host="pg-service",
            database="postgres",
            user="postgres",
            password="postgres")

    return g.dbConn

def recup(userID):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute('SELECT * FROM public."Basket" WHERE "User_Id"=' + userID)
        rows = cur.fetchall()
        descriptions = cur.description

    jsonResults = dict()
    for row in rows:
        for i in range(len(descriptions)):
            jsonResults[descriptions[i][0]] = row[i]
    for result in jsonResults:
        print(result)
    print(jsonResults)

    return jsonResults