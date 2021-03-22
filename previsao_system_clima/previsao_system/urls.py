"""previsao_system URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from previsao_register.viewsets import BuscaPrevisao, HistoryViewSet
from previsao_register.views import weather_form, weather_list, search_history

ROUTER = routers.SimpleRouter()
ROUTER.register(r'buscaprevisao', BuscaPrevisao)
ROUTER.register(r'historico', HistoryViewSet)

urlpatterns = [
    path('api/', include(ROUTER.urls)),
    path('admin/', admin.site.urls),
    path('weather/', weather_form), 
    path('weather/list/', weather_list),
    path('weather/history/', search_history)
]
