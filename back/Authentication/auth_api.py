from flask import Flask, render_template, jsonify, request


app = Flask(__name__)

@app.route('/api/authenticate/')
def authenticate():
    username = request.args.get('name')
    password = request.args.get('password')
    print(username, password)
    token = "Hello"
    return token

if __name__ == "__main__":
    app.run(debug=True)