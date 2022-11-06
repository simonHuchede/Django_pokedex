from django.shortcuts import render
from django.http import HttpResponse
from random import randrange
import requests as req
from .models import Pokemon

def index(request):
    rdm = randrange(150)    
    url="https://pokeapi.co/api/v2/pokemon/"+str(rdm)
    response = req.get(url)
    if response.status_code == 200:
        result = response.json()
        stats = {
                "hp" : result["stats"][0]['base_stat'],
                "atq" : result["stats"][1]['base_stat'],
                "def" : result["stats"][2]['base_stat'],
                "atqSpe" : result["stats"][3]['base_stat'],
                "defSpe" : result["stats"][4]['base_stat'],
                "speed" : result["stats"][5]['base_stat']
                }
        pokemon = Pokemon(
            result['id'],result['name'],result['weight'],result['height'],
            result['types'][0]['type']['name'],
            result['base_experience'],
            result['abilities'][0]['ability']['name'],
            result['sprites']['other']['dream_world']['front_default'],
            stats
            )
        #pokemonObjList=[]
        #for pokemon in pokemonList:
        #    res = req.get(pokemon['url'])
        #    pokemonjs = res.json()
        #    stats = {
        #        "hp" : pokemonjs["stats"][0],
        #        "atq" : pokemonjs["stats"][1],
        #        "def" : pokemonjs["sta#ts"][2],
        #        "atqSpe" : pokemonjs["stats"][3],
        #        "defSpe" : pokemonjs["stats"][4],
        #        "speed" : pokemonjs["stats"][5]
        #        }
        #    pokemonobj = Pokemon(
        #    pokemonjs['id'],pokemonjs['name'],pokemonjs['weight'],pokemonjs['height'],
        #    pokemonjs['types'][0]['type']['name'],
        #    pokemonjs['base_experience'],
        #    pokemonjs['abilities'][0]['ability']['name'],
        #    pokemonjs['sprites']['other']['dream_world']['front_default'],
        #    stats
        #    )
        #    pokemonObjList.append(pokemonobj)
        
        context={
            'pokemon': pokemon,
        }

    return render(request,"app_pokedex/index.html",context)
