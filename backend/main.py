from flask import Flask, request

# define a Flask application
app = Flask(__name__)

# global variable to store recipes
# this is our data store
recipes = []

# hello world
@app.route("/hello")
def hello_fn():
    return "hello world\n"

# API to fetch our recipes
@app.route("/fetch_recipes")
def recipes_fetch():
    # fetch our recipes from 
    # data store
    if request.method == "GET":
        print("GET request")
    
    # url arguments
    print(request.args)

    # return the recipes to 
    # the client
    return recipes


# API to upload a recipe
@app.route("/upload_recipe", methods=["POST"])
def recipe_upload_fn():
    # take/extract the dictionary/json 
    # received from the client
    data = request.get_json()

    # if handling the raw
    # data
    print(request.data)

    # update the recipes list
    recipes.append(data)

    return "recipe uploaded successfully!"
    

# if we run our main.py file directly
if __name__ == "__main__":
    app.run(debug=True)