from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.weather_form), 
    path('list/', views.weather_list)
]