import os
import json
import requests
from dotenv import load_dotenv
load_dotenv()

KEY = os.getenv('API_KEY')
URL = "https://api.themoviedb.org/3/"
LIST_ID = 12179  # id of the list containing mcu movies

# get movies from the list
req = requests.get(f'{URL}list/{LIST_ID}?api_key={KEY}')
data = req.json()
movies_from_list = data.get('items', [])

# loop through and get a dictionary of credits - movie_id: credits
credits_movie = {}
for movie in movies_from_list[:5]:
    req = requests.get(f'{URL}movie/{movie["id"]}/credits?api_key={KEY}')
    data = req.json()
    movie['cast'] = data.get('cast', [])
    movie['crew'] = data.get('crew', [])

# store dictionary with information as a json file
with open('mcu_movies.json', 'w') as file:
    json.dump(movies_from_list, file, indent=2)
