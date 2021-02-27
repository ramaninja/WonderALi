from flask import g 
import psycopg2

# gestion de la connexion à la BDD
# voir : https://flask.palletsprojects.com/en/0.12.x/tutorial/dbcon/
def get_db():
    if not hasattr(g, "dbConn"):
        g.dbConn = psycopg2.connect(
            host="products-pg-service",
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

def getProductList():
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute('SELECT * FROM public."Products"')
        results = processResults(cur)

    return results

def findProduct(id):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("SELECT * FROM public.\"Products\" WHERE \"Products\".\"Product_Id\" = '" + id + "';")
        results = processResults(cur, "single")

    return results

def findProductsByName(productName):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("SELECT * FROM public.\"Products\" WHERE LOWER(\"Products\".\"Name\") LIKE '%" + productName.lower() + "%';")
        results = processResults(cur)

    return results

def findProductsByCategory(productCategory):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("SELECT * FROM public.\"Products\" WHERE LOWER(\"Products\".\"Category\") LIKE '%" + productCategory.lower() + "%';")
        results = processResults(cur)

    return results

def createProduct(productName, productCategory, productPrice):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("INSERT INTO public.\"Products\"(\"Price\", \"Name\", \"Category\")" +
        "VALUES('" + productPrice + "', '" + productName + "', '" + productCategory + "');")

        conn.commit()
        return str(cur.rowcount) + " Record created successfully"

def deleteProduct(productId):
    conn = get_db()

    with conn.cursor() as cur:
        cur.execute("DELETE FROM public.\"Products\" WHERE \"Products\".\"Product_Id\"=" + productId)
        conn.commit()
        return str(cur.rowcount) + " Record deleted successfully"