from django.urls import path,include
from . import views


urlpatterns = [
    path('',views.index,name='index'),
    path('my_teams', views.my_teams, name="my_teams"),
    path('moves/<str:pokemon_id>', views.moves, name="moves_pokemon"),
    path('about', views.about, name="about")
]
