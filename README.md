# Django

Django is a Python library for dealing with web application development.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install django.

```bash
pip install django
```

## Classic clone method
Before to clone the git project, be sure to be where you should be.
```bash
cd C:/Users/user/my_project
```
Then you can clone the git project while you're in a terminal.
```bash
git clone https://github.com/simonHuchede/Django_pokedex.git
```

## Virtual environment method
If you prefer to be in a virtual enviroment, then be sure to have virtualenv installed.
```bash
pip install virtualenv
```
And then you can create your virtual environment, here we give the name "env" for the virtual repository:
```bash
py -m venv env
```
Then go to:
```bash
cd <env\Scripts>
```
Once there, you'll be able to activate your virtual environment.
```bash
./activate
```
At least, you can clone the git project with the same command in classic method.
```bash
git clone https://github.com/simonHuchede/Django_pokedex.git
```


# Start your web server
First of all, be sure to be in the project
```bash
cd \Django_pokedex\pokedex_project
```
And then, go to run the web server with this command:
```bash
py manage.py runserver
```
Open a new tab and go to this adress:
```
http://127.0.0.1:8000/
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
