from flask import g 
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

def getProductList():
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute('SELECT * FROM public."Products"')
        rows = cur.fetchall()

    return rows

def findProductsByName(productName):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("SELECT * FROM public.\"Products\" WHERE \"Products\".\"Name\" LIKE '%" + productName + "%';")
        rows = cur.fetchall()

    return rows

def findProductsByCategory(productCategory):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("SELECT * FROM public.\"Products\" WHERE \"Products\".\"Category\" LIKE '%" + productCategory + "%';")
        rows = cur.fetchall()

    return rows

def createProduct(productName, productCategory, productPrice):
    conn = get_db()
    count = None
    createProduct.cpt += 1

    with conn.cursor() as cur:
        cur.execute("INSERT INTO public.\"Products\"(\"Product_Id\", \"Price\", \"Name\", \"Category\")" +
        "VALUES(" + str(createProduct.cpt) + ", '"+ productPrice + "', '" + productName + "', '" + productCategory + "');")

        conn.commit()
        count = cur.rowcount

    # print("INSERT INTO public.\"Products\"(\"Product_Id\", \"Price\", \"Name\", \"Category\")" +
    #     "VALUES(" + str(createProduct.cpt) + ", '"+ str(productPrice) + "', '" + str(productName) + "', '" + str(productCategory) + "');")

    return str(count) + " Record inserted successfully into mobile table"

createProduct.cpt = 10

# def deleteProduct(productId):
