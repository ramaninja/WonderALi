from flask import Flask, jsonify, request
import Product

app = Flask(__name__)

@app.route('/api/product/list')
def getProductList():
    products = Product.getProductList()

    return jsonify(products)

@app.route('/api/product/findbyname')
def findProductByName():
    productName = request.args.get("name")
    products = Product.findProductsByName(productName)

    return jsonify(products)

@app.route('/api/product/findbycategory')
def findProductByCategory():
    productCategory = request.args.get("category")
    products = Product.findProductsByCategory(productCategory)

    return jsonify(products)

@app.route('/api/product/create', methods=['POST'])
def createProduct():
    productName = request.args.get("name")
    productCategory = request.args.get("category")
    productPrice = request.args.get("price")
    
    return Product.createProduct(productName, productCategory, productPrice)

# @app.route('/api/product/delete')
# def deleteProduct():
#     productId = request.args.get("id")

#     return Product.deleteProduct(productId)
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)