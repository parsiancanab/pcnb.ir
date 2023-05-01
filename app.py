from flask import Flask, render_template, redirect, url_for
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/index")
def index():
    return redirect(url_for("hello_world"))

@app.route("/child")
def child():
    return render_template("child.html")

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"

if __name__=="__main__":
    app.run()