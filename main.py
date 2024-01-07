from flask import Flask, request, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
db = SQLAlchemy(app)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    ingredients = db.Column(db.Text, nullable=False)
    instructions = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "ingredients": self.ingredients,
            "instructions": self.instructions
        }
    
app.app_context().push()
try:
    db.create_all()
except:
    pass

@app.route('/')
def index():
    recipes = Recipe.query.all()

    return list(map(lambda x: x.to_dict(), recipes))

@app.route('/add_recipe', methods=['POST'])
def add_recipe():
    if request.method == 'POST':
        data = request.get_json()

        new_recipe = Recipe(title=data['title'], ingredients=data['ingredients'], instructions=data['instructions'])
        db.session.add(new_recipe)
        db.session.commit()

        return "ok"


if __name__ == '__main__':
    app.run(debug=True)
