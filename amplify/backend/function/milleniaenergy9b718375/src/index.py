from __future__ import print_function
import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
import botocore
import os.path
import googleapiclient.discovery

from google.oauth2 import service_account
from google.oauth2.service_account import Credentials
from google.auth.transport.requests import Request
# from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

s3 = boto3.resource('s3')
keys = ['service.json']
# SERVICE_ACCOUNT_FILE = 'https://amplify-amplify912f78195bc04-staging-80157-deployment.s3.ap-southeast-1.amazonaws.com/service.json'
BUCKET_NAME = 'amplify-amplify912f78195bc04-staging-80157-deployment'
for KEY in keys:
    try:
        local_file_name = '/tmp/' + KEY
        s3.Bucket(BUCKET_NAME).download_file(KEY, local_file_name)
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            continue
        else:
            raise

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']


# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '16-5d-_EaxgZ9P5eD2tDiqrskBOykOdQWERvnohBPyTw'
SAMPLE_RANGE_NAME = 'test_data_2'
BASE_ROUTE = "/metrics"
SECRET_PATH = "amplify/backend/function/milleniaenergy9b718375/src/client_secret.json"

app = Flask(__name__)
CORS(app)

@app.route(BASE_ROUTE, methods=["GET"])
def list_metrics():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('/tmp/service.json'):
        # creds = Credentials.from_service_account_file('service.json', SCOPES)
        credentials = service_account.Credentials.from_service_account_file("/tmp/service.json", scopes=SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    # if not creds or not creds.valid:
    #     if creds and creds.expired and creds.refresh_token:
    #         creds.refresh(Request())
    #     else:
    #         flow = InstalledAppFlow.from_client_secrets_file(
    #             SECRET_PATH , SCOPES)
    #         creds = flow.run_local_server(port=8080)
    #     # Save the credentials for the next run
    #     with open('/tmp/token.json', 'w') as token:
    #         token.write(creds.to_json())

    try:
        service = build('sheets', 'v4', credentials=credentials)

        # Call the Sheets API
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                    range=SAMPLE_RANGE_NAME).execute()
        values = result.get('values', [])
        title = []
        metric_values = []
        if not values:
            print('No data found.')
            return None

        print('Title, Value:')
        for row in values:
            # Row refers to columns in this case. 2 columns of data refers to row indices from 0 to 1.
            print('%s, %s' % (row[0], row[1]))
        return jsonify(values)
    except HttpError as err:
        print(err)

def handler(event, context):
    return awsgi.response(app, event, context)
