from flask import g 
import json
import psycopg2
import requests

# gestion de la connexion à la BDD
# voir : https://flask.palletsprojects.com/en/0.12.x/tutorial/dbcon/
def get_db():
    if not hasattr(g, "dbConn"):
        g.dbConn = psycopg2.connect(
            host="basket-pg-service",
            database="postgres",
            user="postgres",
            password="postgres")

    return g.dbConn

def processResults(cur, mode="multi"):

    results = cur.fetchall()
    columns = cur.description

    jsonResults = []
    product = {}
    print(results)
    for result in results:
        product = {}
        for i in range(len(columns)):
            product[columns[i][0]] = result[i]
        jsonResults.append(product)

    if(mode == "single"):
        return result
    else:
        return jsonResults

def findBasket(userId):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute('SELECT * FROM public."Basket" WHERE "User_Id"=' + userId)
        results = processResults(cur)

    return results

def addToBasket(userId, productId):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("INSERT INTO public.\"Basket\"(\"User_Id\", \"Product_Id\") " +
        "VALUES('" + userId + "', '" + productId + "');")
        
        conn.commit()
        return str(cur.rowcount) + " Record created successfully"

def deleteBasketEntry(basketId):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("DELETE FROM public.\"Basket\" WHERE \"Basket\".\"Basket_Id\"=" + basketId)

    return "Record n°" + basketId + " deleted successfully"

def clearBasket(userId):
    conn = get_db()
    count = None

    with conn.cursor() as cur:
        cur.execute("DELETE FROM public.\"Basket\" WHERE \"Basket\".\"User_Id\"=" + userId)
        conn.commit()
        count = cur.rowcount

    return str(count) + " Record deleted successfully"