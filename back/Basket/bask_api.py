from flask import Flask, render_template, jsonify, request
from json import dumps
import psycopg2
from Basket import recup

app = Flask(__name__)

@app.route('/api/basket/get')
def getBasket():
    userID = request.args.get("userid")
    basket = recup(userID)
    return jsonify(basket)

@app.route('/api/basket/clear')
def clearBasket(userId):
    username = request.args.get('name')
    password = request.args.get('password')
    print(username, password)
    token = "Hello"
    return token

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
