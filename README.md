
# FlickFinder -Movie Match🍿

It is a ml powered web app that recommends movies based on selection along with their details

![Ui image](https://github.com/RishiBakshii/Movie-Recommender-System/blob/main/static/Images/ui%20image%201.png?raw=true)
![ui image 2](https://github.com/RishiBakshii/Movie-Recommender-System/blob/main/static/Images/ui%20image%202.png?raw=true)



## Project Description
- Flickfinder -MovieMatch is a Movie Recommendation webapp where one can choose from a big list of 5000 movies
- and based on selection this movie recommendation engine will recommended you 5 movies followed by their details and starcast
## Project Highlights
- This Project uses TMDB api to fetch data
- Detailed jupyter notebook with every step explanied
- Responsive Design
 
## Dataset Description
This dataset is taken from kaggle and can be visited [here](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?select=tmdb_5000_movies.csv)

This dataset contains information about 5000 movies

## API Reference

- This project utilizes two APIs to fetch data about movies and starcast
#### For getting movie details 

```http
  GET https://api.themoviedb.org/3/movie//items/{movie_id}?api_key={api_key}"
```

#### For getting Cast details

```http
  GET https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={api_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `movie_id` | `string` | Movie id for getting the details about specific movie |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | Your TMDB API key |




## Optimizations

Merged all the data fetched from both api's about [ MovieDetails CastDetails ]
### From this
- Movie Details
    - image_path
    - title
    - realease_data
    - genres
    - runtime
    - user_rating
    - overview

- Cast Details
    - original_name
    - character
    - image_path

### To This
```json
[
  {
    'image_path': 'https://image.tmdb.org/t/p/original/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg',
    'title': 'Spider-Man 2',
    'realease_date': '2004-06-25',
    'genres': 'Action Adventure Fantasy',
    'runtime': 127,
    'user_rating': 7.246,
    'overview': "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood. A certain anger begins to brew in his best friend Harry Osborn as well...",
    'cast': [
      {
        'original_name': 'Tobey Maguire',
        'character': 'Spider-Man / Peter Parker',
        'image_path': 'https://image.tmdb.org/t/p/original//kOJelnLSb89SeivbOCt1l94Hz2d.jpg'
      },
      {
        'original_name': 'Kirsten Dunst',
        'character': 'Mary Jane Watson',
        'image_path': 'https://image.tmdb.org/t/p/original//6RAAxI4oPnDMzXpXWgkkzSgnIAJ.jpg'
      },
      {
        'original_name': 'James Franco',
        'character': 'Harry Osborn',
        'image_path': 'https://image.tmdb.org/t/p/original//rShzuvrQJJQJ6lXDn3IQX4o0iCE.jpg'
      },
      {
        'original_name': 'Alfred Molina',
        'character': 'Doc Ock / Otto Octavius',
        'image_path': 'https://image.tmdb.org/t/p/original//nJo91Czesn6z0d0pkfbDoVZY3sg.jpg'
      },
      {
        'original_name': 'Rosemary Harris',
        'character': 'May Parker',
        'image_path': 'https://image.tmdb.org/t/p/original//rpSsXg0tB7wWQMffvvMqLzrvZAj.jpg'
      }
    ]
  }
]
```

- After merging the data looping over them got simplified. Thus resulting in lesser complexity of the backend.
- Also only one prop was being sent to the frontend i.e "finalRecommendation" which contained all the data about 5 recommended movies.







## Run Locally

Clone the project

```cmd
  git clone https://github.com/RishiBakshii/Movie-Recommender-System.git
```

Go to the project directory

```cmd
  cd path/to/the/cloned/repository
```

Download this file **similarity.pkl** from [google-drive-link](https://drive.google.com/file/d/1tcx3L-kCYbf2s2TeFQ75_SeP49MciHu3/view?usp=sharing)

```cmd
  Make sure to move this file in the project directory
```

Install dependencies

```cmd
  pip install -r requirements.txt
```

Start the server

```cmd
  py app.py
```


## Deployment
- This project is currently deployed at Azure
- and can be visited from here [FlickFinder - Moviematch]()
## Authors

- [@RishiBakshii](https://github.com/RishiBakshii)

