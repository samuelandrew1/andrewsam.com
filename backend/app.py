'''import libraries'''
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def blog():
    """response to the news card

    Returns:
        object
    """
    my_obj = {"news":
              [
                  {
                      "newsDate": "todayDate",
                      "newsImage": "picture",
                      "newsHeading": "'hello world",
                      "newsSubHeading": "welcome to my blog page",
                      "newsContent": "some continues content here"
                  }]
              }
    return my_obj


if __name__ == "__main__":
    app.run(debug=True)
