from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3

app = Flask(__name__)
CORS(app)

# DynamoDB Configuration
dynamodb = boto3.resource('tablefranky')
table = dynamodb.Table('EmployeeProfiles')  # Replace 'EmployeeProfiles' with your table name

@app.route('/save_profile', methods=['POST'])
def save_profile():
    data = request.json
    table.put_item(Item=data)
    return jsonify({'message': 'Profile saved successfully'})

@app.route('/get_profiles', methods=['GET'])
def get_profiles():
    response = table.scan()
    profiles = response.get('Items', [])
    return jsonify(profiles)

if __name__ == '__main__':
    app.run(debug=True)
