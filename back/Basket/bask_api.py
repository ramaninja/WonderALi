from flask import Flask, jsonify, request
from flask_cors import CORS
import Basket

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

# URL Exemple : http://127.0.0.1:5001/api/basket?userid=12
@app.route('/api/basket', methods=['GET'])
def findBasket():
    userId = request.args.get("userid")

    basket = Basket.findBasket(userId)

    return jsonify(basket)
    
# URL Exemple : http://127.0.0.1:5001/api/basket?userid=12&productid=2
@app.route('/api/basket', methods=['POST'])
def addToBasket():
    userId = request.args.get("userid")
    productId = request.args.get("productid")

    basket = Basket.addToBasket(userId, productId)

    return jsonify(basket)

# URL Exemple : http://127.0.0.1:5001/api/basket?userid=12
@app.route('/api/basket', methods=['DELETE'])
def deleteBasket():
    basketId = request.args.get("userid")

    basket = Basket.deleteBasketEntry(basketId)

    return jsonify(basket)

# URL Exemple : http://127.0.0.1:5001/api/basket/clear
@app.route('/api/basket/clear', methods=['POST'])
def clearBasket():
    userId = request.args.get("userid")

    return Basket.clearBasket(userId)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)