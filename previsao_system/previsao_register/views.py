from django.shortcuts import render, redirect
from .forms import WeatherForm
from .models import Weather

# Create your views here.

def weather_list(request):
    context = {'previsao_list':Weather.objects.all()}
    return render(request,"previsao_register/previsao_list.html", context)

def weather_form(request):
    if request.method == "GET":
        form = WeatherForm()
        return render(request,"previsao_register/previsao_form.html", {'form': form})
    else:
        form = WeatherForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect("/weather/list")

def search_history(request):
    return