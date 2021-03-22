from rest_framework import viewsets
from rest_framework.response import Response
from .models import History
from .seriallizers import HistorySerializer
from .dict2obj import obj
import requests
import json


class BuscaPrevisao(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer

    def create(self, request, *args, **kwargs):
        dados = obj(request.data)
        CHAVE = "b9e1d7b5ce0e14873b69f59f7facdd3d"
        CIDADE = dados.cidade
        print(CIDADE)
        URL = f"http://api.openweathermap.org/data/2.5/forecast?q={CIDADE}&appid={CHAVE}&units=metric&lang=pt_br"

        result = requests.get(URL)
        jsonDados = str(result.json())

        saida = obj(result.json())
        if saida.cod == '200':
            History(cidade=CIDADE, jsonDados=jsonDados).save()
        return Response(result.json())


class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [JWTAuthentication]

    def list(self, request, *args, **kwargs):
        historico = History.objects.all()
        dados = list()
        for d in historico:
            jsonDados = d.jsonDados.replace("'", '"')
            saida = dados.append(json.loads(jsonDados))
        return Response(dados)