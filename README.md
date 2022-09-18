# Marvelated
Web application which allows the user to search for a movie and see how the cast of the movie relate to the Marvel shows and movies. It'll show each of the cast/crew and the roles they had in the Marvel movies.

### TMDb API Key
Project requires an API key, you can get this directly from TMDb by signing up: [TMDb](https://developers.themoviedb.org/3/getting-started/authentication).

### Run the Project
Install the dependencies:
```bash
yarn install
```

Create a `.env` file and add your TMDB API key to it:
```bash
touch .env
echo "VUE_APP_TMDB_API_KEY={key}" >> .env
```

Run the web application:
```bash
yarn serve
```

### Main.py - scraper for marvel movie/show details
The `main.py` script in the root directory is a simple script which gathers all the movies/shows from this [TMDb list](https://www.themoviedb.org/list/8217984) which I created to compile all the movies and shows in one place. Once the script is run it'll produce a JSON file containing movie information and actor information.

Add another entry to your `.env` file which is used by the script (same key as before):
```bash
echo "API_KEY={key}" >> .env
```

Run the script (the 3 is only needed when you have Python2 also installed on your system):
```bash
python[3] main.py
```
