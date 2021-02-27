from flask import Flask, jsonify, request
from flask_cors import CORS
import Product

app = Flask(__name__)
CORS(app)
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)