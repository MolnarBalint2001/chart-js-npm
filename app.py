

# app.py

from flask import Flask, render_template

# Inicializáld a Flask alkalmazást
app = Flask(__name__)

# Az egyetlen endpoint, ami a főoldalt fogja kiszolgálni
@app.route('/')
def index():
    # A render_template automatikusan a 'templates' mappában keresi az index.html-t
    return render_template('index.html')

if __name__ == '__main__':
    # Flask futtatása
    app.run(debug=True)
