from django.shortcuts import render
from django.http import HttpResponse
import requests as req
from .models import Pokemon

def index(request):
    url="https://pokeapi.co/api/v2/pokemon/?limit=151"
    response = req.get(url)
    if response.status_code == 200:
        results = response.json()
        pokemonList = results['results']
        context={
    'pokemonList': pokemonList
    }
        pokemonObjList=[]
        for pokemon in pokemonList:
            res = req.get(pokemon['url'])
            pokemonjs = res.json()
            pokemonobj = Pokemon(pokemonjs['id'],pokemonjs['name'],pokemonjs['weight'],pokemonjs['height'],pokemonjs['types'][0]['type']['name'],pokemonjs['base_experience'],pokemonjs['abilities'][0]['ability']['name'],pokemonjs['sprites']['other']['dream_world']['front_default'])
            pokemonObjList.append(pokemonobj)

        print(pokemonObjList[0].weight)
    return render(request,"app_pokedex/index.html",context)

