from django.db import models

# Create your models here.

class History(models.Model):
    search_history = models.CharField(max_length=250)

class Weather(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    temperature = models.CharField(max_length=100)
