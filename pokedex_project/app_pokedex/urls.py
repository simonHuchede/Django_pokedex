from django.urls import path,include
from . import views


urlpatterns = [
    path('',views.index,name='index'),
    path('my_team', views.my_team, name="my_team"),
    path('api/requestArrow',views.requestArrow, name="api_request_arrow")
]
