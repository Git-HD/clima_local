from django import forms
from .models import Weather

class WeatherForm(forms.ModelForm):

    class Meta:
        model = Weather
        fields = ('name', 'description', 'temperature')
        labels = {
            'name': 'Nome da cidade',
            'description': 'País',
            'temperature': 'Temperatura'
        }

    def __init__(self, *args, **kwargs):
        super(WeatherForm, self).__init__(*args, **kwargs)
