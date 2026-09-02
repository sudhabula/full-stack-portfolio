from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


# Create database and contacts table
def init_db():
    conn = sqlite3.connect("contacts.db")
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # Save message to database
    conn = sqlite3.connect("contacts.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
        (name, email, message)
    )

    conn.commit()
    conn.close()

    return "Thank you! Your message has been received."


if __name__ == "__main__":
    init_db()
    app.run(debug=True)