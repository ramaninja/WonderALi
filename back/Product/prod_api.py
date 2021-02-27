from flask import Flask, jsonify, request
from flask_cors import CORS
import Product

app = Flask(__name__)
CORS(app)

@app.route('/api/product/list', methods=['GET'])
def getProductList():
    products = Product.getProductList()

    return jsonify(products)

@app.route('/api/product', methods=['GET'])
def findProduct():
    productName = request.args.get("id")

    products = Product.findProduct(productName)

    return jsonify(products)

@app.route('/api/product/findbyname', methods=['GET'])
def findProductByName():
    productName = request.args.get("name")

    products = Product.findProductsByName(productName)

    return jsonify(products)

@app.route('/api/product/findbycategory', methods=['GET'])
def findProductByCategory():
    productCategory = request.args.get("category")

    products = Product.findProductsByCategory(productCategory)

    return jsonify(products)

@app.route('/api/product', methods=['POST'])
def createProduct():
    productName = request.args.get("name")

    productCategory = request.args.get("category")
    productPrice = request.args.get("price")
    
    return Product.createProduct(productName, productCategory, productPrice)

@app.route('/api/product', methods=['DELETE'])
def deleteProduct():
    productId = request.args.get("id")

    return Product.deleteProduct(productId)
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)