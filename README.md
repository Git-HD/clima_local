# Clima Local

Version 1.0.0

Sistema usando django, djangorestframework e react junto com a a api openweathermap.


---

##Instalação

- npm install (previsao-front)
- criar bando de dados postgres local e adicionar configurações no settings.py:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'previsaoDB',
        'USER': 'postgres',
        'PASSWORD': 'root',
        'HOST': 'localhost'
    }
}

- python manage.py migrate
- no repósitorio previsao-front executar npm start para rodar servidor local
- executar python manage.py para rodar servidor local do django

---

##Fluxo do sistema

- pesquisar cidades na página inicial com a openweatherAPI
- o nome deve ser válido
Na navigation bar:
- Adicionar informações da api no banco de dados (Cadastrar)
- Verificar registros (Lista de registros)
- Histórico de pesquisa (Histórico)

---

## Licence & copyright

&copy; Henrique Duarte Leite
