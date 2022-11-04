from django.shortcuts import render
from django.http import HttpResponse
import requests

def index(request):
    context = {
        
    }
    return render(request, 'index.html', context)