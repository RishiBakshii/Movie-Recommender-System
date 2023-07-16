import React from "react";

function MovieCard({
  movie_id,
  title,
  release_date,
  image_path,
  genres,
  runtime,
  user_rating,
  overview,
  handlePosterClick,
  recommend,
}) 

{
  console.log(recommend)
  return (
    <div key={title} className="movie-cards">
      <div className="photo-and-details-container">
        <div className="photo-container">
          <img
            src={image_path}
            alt="image"
            onClick={() => handlePosterClick(movie_id, title, recommend)}
          />
        </div>
        <div className="details-container">
          <h1 onClick={() => handlePosterClick(movie_id, title, recommend)}>
            {title}
          </h1>
          <p>{release_date}</p>
          <p>{genres}</p>
          <p>{runtime} mins</p>
          <h2>User rating - {user_rating}</h2>
          <h3>Overview</h3>
          <p className="overview-text">{overview}</p>
          <h4>StarCast</h4>
        </div>
      </div>
      <div className="starcast-details-grid">
        {/* {
        recommend.cast.length==0?(
        recommend.cast.map((cast_details) => {
          return (
            <div key={recommend.movie_id} className="grid-item-starcast">
              <div className="cast-container">
                <img
                  className="star-cast-image"
                  src={cast_details.image_path}
                  alt="☹️"
                />
                <p>{cast_details.original_name}</p>
                <p>{cast_details.character}</p>
              </div>
            </div>
          );
        })

        ):(<h1>Data Not loaded</h1>)


} */}
      </div>
    </div>
  );
}

export default MovieCard;
