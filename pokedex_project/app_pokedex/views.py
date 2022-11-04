from django.shortcuts import render
from django.http import HttpResponse
import requests as req

def index(request):
    url="https://pokeapi.co/api/v2/pokemon/?limit=1155"
    response = req.get(url)
    if response.status_code == 200:
        results = response.json()
        pokemonList = results['results']
        context={
    'pokemonList': pokemonList
    }
    return render(request,"index.html",context)

