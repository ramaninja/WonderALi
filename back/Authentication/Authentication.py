from flask import Flask, g
import psycopg2

# gestion de la connexion à la BDD
# voir : https://flask.palletsprojects.com/en/0.12.x/tutorial/dbcon/
def get_db():
    if not hasattr(g, "dbConn"):
        g.dbConn = psycopg2.connect(
            host="users-pg-service",
            database="postgres",
            user="postgres",
            password="postgres")

    return g.dbConn

def auth(username, password):
    conn = get_db()
    
    with conn.cursor() as cur :
        cur.execute('SELECT * FROM public."Users" WHERE LOWER("Name")=\'' + username.lower() + '\' AND "Password"=\'' + password + "'")
        rows = cur.fetchall()
        return str(len(rows) > 0)
