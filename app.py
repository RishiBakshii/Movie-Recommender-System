from flask import Flask,render_template,request,jsonify
import requests,pickle
import pandas as pd
import numpy as np


df=pd.DataFrame(pickle.load(open("movies.pkl",'rb')))
similarity=pd.DataFrame(pickle.load(open("similarity.pkl",'rb')))

API_KEY= '94aa51b7bd714e4a65af319755ed562a'
BASE_URL = 'https://api.themoviedb.org/3/movie/'


app=Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html",movieNames=df['title'],recommendation=False)

@app.route('/fetchDataFromApi')
def get_movie_details(movie_id):


    # cast details
    cast_details=[]

    cast_url = f'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={API_KEY}'
    cast_response=requests.get(cast_url)

    if cast_response.status_code==200:
        cast_data=cast_response.json()

        top_5_cast_details=cast_data['cast'][:5]
    
    for i in top_5_cast_details:
        cast_details.append({
            "original_name":i['original_name'],
            'character':i['character'],
            'image_path':f"https://image.tmdb.org/t/p/original/{i['profile_path']}",
        })

    

    # movieDetails
    url = f'{BASE_URL}{movie_id}?api_key={API_KEY}'
    response = requests.get(url)
    
    
    if response.status_code == 200:
        movie_data = response.json()

        image_path=f"https://image.tmdb.org/t/p/original{movie_data['poster_path']}"
        title=movie_data['original_title']
        realease_date=movie_data['release_date']
        genres=[i['name'] for i in movie_data['genres']]
        genres=' '.join(genres)
        runtime=movie_data['runtime']
        user_rating=movie_data['vote_average']
        overview=movie_data['overview']

        return{
            'image_path':image_path,
            'title':title,
            'realease_date':realease_date,
            'genres':genres,
            'runtime':runtime,
            'user_rating':user_rating,
            'overview':overview,
            'cast':cast_details,
        }
    else:
        return None

@app.route('/getrecommendations',methods=['POST'])
def recommend():    
    recommended_movie_ids=[]
    cast_details=[]
    final_recommendation=[]

    movie=request.form['selected-movie']
    index_of_movie=df[df['title']==movie].index[0]
    recommend_movie_index=pd.Series(similarity[index_of_movie]).sort_values(ascending=False)[1:6].index

    for movies in list(df.loc[recommend_movie_index,'movie_id'].values):
        recommended_movie_ids.append(movies)
    
    
    for movie_ids in recommended_movie_ids: 
        final_recommendation.append(get_movie_details(movie_ids))
    
    return render_template("home.html",recommendations=final_recommendation,movieNames=df['title'],cast_details=cast_details)


if __name__=="__main__":
    app.run(debug=True)
