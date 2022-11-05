from django.shortcuts import render
from django.http import HttpResponse
from random import randrange
import requests as req
from .models import Pokemon

def index(request):
    url="https://pokeapi.co/api/v2/pokemon/?limit=1155"
    # rdm = randrange(100)
    # url="https://pokeapi.co/api/v2/pokemon/"+str(rdm)
    response = req.get(url)
    
    if response.status_code == 200:
        results = response.json()
        pokemon = results
        stats = {
            "hp" : pokemon["stats"][0],
            "atq" : pokemon["stats"][1],
            "def" : pokemon["stats"][2],
            "atqSpe" : pokemon["stats"][3],
            "defSpe" : pokemon["stats"][4],
            "speed" : pokemon["stats"][5]
        }
        context={
            'pokemon': pokemon,
            'url' : pokemon['sprites']['other']['official-artwork']['front_default'],
            "stats" : stats
        }
        pokemonObjList=[]
        for pokemon in pokemonList:
            res = req.get(pokemon['url'])
            pokemonjs = res.json()
            pokemonobj = Pokemon(pokemonjs['id'],pokemonjs['name'],pokemonjs['weight'],pokemonjs['height'],pokemonjs['types'][0]['type']['name'],pokemonjs['base_experience'],pokemonjs['abilities'][0]['ability']['name'],pokemonjs['sprites']['other']['dream_world']['front_default'])
            pokemonObjList.append(pokemonobj)

        print(pokemonObjList[0].weight)
    return render(request,"app_pokedex/index.html",context)

