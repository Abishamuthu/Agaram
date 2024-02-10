from flask import Flask
from flask import render_template

app=Flask(__name__)

@app.route('/')
def name() :
    return "<marquee><h1>welcome Abisha</h1></marquee>"
    
@app.route('/home')
def wel() :
    return "home page"

@app.route('/home/<name>')
def printusername(name) :
    return name

@app.route('/htmlpg/<name>')
def renderhtml(name) :
    # namelist = ["df","we","sdg"]
    return render_template('home.html',name=name,namelist=["Ramesh","Suresh","Ganesh","Rajesh","Bavesh","Damesh"])



# @app.route('/todo')
# def todo():
#     return render_template('todo.html')


if __name__ == "__main__" :
    app.run(debug=True)