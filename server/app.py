from flask import Flask,request,jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])

#SAMPLE USER
users = {
    "user": "password" 
}
@app.route("/api/test")
def test():
    return {"message": "BACKEND CONNECTION SUCESSFUL"}

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    

    if username in users and users[username] == password:
        return jsonify({"success": True, "message": "Login successful"})
    else:
        return jsonify({"success": False, "message": "Login failed"}), 401

@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    password2 = data.get("password2")

    if password != password2:
        return jsonify({"success": False, "message": "Passwords Do Not Match!"}), 401
    else: 
        return jsonify({"success": True, "message": "Account Made!"})

if __name__ == "__main__":
    app.run(debug=True)