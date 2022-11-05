from django.shortcuts import render
from django.http import HttpResponse
from random import randrange
import requests as req

def index(request):
    rdm = randrange(100)
    url="https://pokeapi.co/api/v2/pokemon/"+str(rdm)
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
    return render(request,"app_pokedex/index.html",context)

