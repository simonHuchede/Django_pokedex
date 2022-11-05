from django.db import models

class Pokemon(models.Model):
    def __init__(self,id,name,weight,height,types,baseexperience,abilities,sprites):
        self.id = id
        self.name = name
        self.weight =weight
        self.height = height
        self.types = types
        self.baseexperience = baseexperience
        self.abilities = abilities
        self.sprites = sprites


