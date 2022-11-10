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
        # dictionary to build correctly the stats of the Pokemon
        stats = {
                "hp" : result["stats"][0]['base_stat'],
                "atq" : result["stats"][1]['base_stat'],
                "def" : result["stats"][2]['base_stat'],
                "atqSpe" : result["stats"][3]['base_stat'],
                "defSpe" : result["stats"][4]['base_stat'],
                "speed" : result["stats"][5]['base_stat']
                }
        # Instance of the model Pokemon
        # https://pokeapi.co/api/v2/gender/?name=bulbasaur <- gender
        
        pokemon = Pokemon(
            result['id'],result['name'].capitalize(),result['weight'],result['height'],
            result['types'],
            result['base_experience'],
            result['abilities'],
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

def requestArrow(request) :
    url="https://pokeapi.co/api/v2/pokemon/"
    if request.GET :
        print('')
        
def my_team(request) :
    
    return render(request,"app_pokedex/my_team.html")

def moves(request, pokemon_id) :
    

    print(pokemon_id)
    urlPokemon = "https://pokeapi.co/api/v2/pokemon/"+pokemon_id
    res = req.get(urlPokemon).json()
    pokemon = Pokemon(
            res['id'],res['name'].capitalize(),res['weight'],res['height'],
            res['types'],
            res['base_experience'],
            res['abilities'],
            res['sprites']['other']['dream_world']['front_default'],
            {}
            )
    movesListJson = res['moves']
    movesList = []
    for i in range(15) :
        resMove = req.get(movesListJson[i]['move']['url']).json()
        movesList.append(resMove)      
    context = {
        "pokemon" : pokemon,
        "movesList" : movesList
    }
    return render(request, 'app_pokedex/moves.html', context)