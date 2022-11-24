from django.shortcuts import render
import requests as req
from .models import Pokemon
from django.core.cache import cache

def index(request):
    pokemon_id = 1
    if request.GET :
        pokemon_id = request.GET['pokemon_id']
    url="https://pokeapi.co/api/v2/pokemon/"+ str(pokemon_id)
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
            result['id'],result['name'].capitalize(),(result['weight'] / 10),result['height'] /10,
            result['types'],
            result['base_experience'],
            result['abilities'],
            result['sprites']['other']['dream_world']['front_default'],
            stats
            )
        result = cache.get('listPokemon')
        if not result : 
            result = req.get('https://pokeapi.co/api/v2/pokemon/?limit=905').json()['results']
            cache.set('listPokemon', result)
             
        context={
            'pokemon': pokemon,
            'pokemonList' : result
        }

    return render(request,"app_pokedex/index.html",context)     
def my_team(request) :
    #Store in the cache to avoid big requests permanently 
    result = cache.get('listPokemon')
    context={
        'pokemonList' : result
    }
    return render(request,"app_pokedex/my_team.html",context)

def moves(request, pokemon_id) :
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
        resMove = sorted(req.get(movesListJson[i]['move']['url']).json(), key=lambda move: move["name"])
        movesList.append(resMove)      
    context = {
        "pokemon" : pokemon,
        "movesList" : movesList
    }
    return render(request, 'app_pokedex/moves.html', context)
