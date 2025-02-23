from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Charger les données depuis les fichiers JSON
def charger_json(fichier):
    with open(fichier, "r", encoding="utf-8") as f:
        return json.load(f)

@app.route("/")
def accueil():
    return render_template("index.html")

@app.route("/services")
def get_services():
    services = charger_json("data/services.json")
    return jsonify(services)

@app.route("/testimonials")
def get_testimonials():
    testimonials = charger_json("data/testimonials.json")
    return jsonify(testimonials)

if __name__ == "__main__":
    app.run(debug=True)
