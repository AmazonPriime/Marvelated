from ctypes import cast
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
people = {}
for movie in movies_from_list:
    req = requests.get(f'{URL}movie/{movie["id"]}/credits?api_key={KEY}')
    data = req.json()
    # store all the cast
    movie['cast'] = []
    for cast_member in data.get('cast', []):
        movie['cast'].append({
            'id': cast_member.get('id'),
            'character': cast_member.get('character', ''),
        })
        people[cast_member.get('id')] = {
            'name': cast_member.get('name', ''),
            'known_for': cast_member.get('known_for_department', ''),
            'profile_path': cast_member.get('profile_path', '')
        }
    # store all the crew
    movie['crew'] = []
    for crew_member in data.get('crew', []):
        movie['crew'].append({
            'id': crew_member.get('id'),
            'job': crew_member.get('job', ''),
        })
        people[crew_member.get('id')] = {
            'name': crew_member.get('name', ''),
            'known_for': crew_member.get('known_for_department', ''),
            'profile_path': crew_member.get('profile_path', '')
        }

# store dictionary with information as a json file
with open('mcu_movies.json', 'w') as file:
    json.dump({
        'movies': movies_from_list,
        'people': people,
    }, file, indent=2)
