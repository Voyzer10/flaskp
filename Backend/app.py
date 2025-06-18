from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask Backend Running!"

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    print("Received data:", data)
    return jsonify({"message": "Data received successfully!"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
