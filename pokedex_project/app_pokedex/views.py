from django.shortcuts import render
from django.http import HttpResponse
import requests

def index(request):
    Text="<h1>Pokédex en construction</h1>"
    return HttpResponse(Text)

