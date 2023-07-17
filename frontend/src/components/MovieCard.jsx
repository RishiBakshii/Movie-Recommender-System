import React from "react";

function MovieCard({movie_id,title,release_date,image_path,genres,runtime,user_rating,overview,handlePosterClick,castData}) {
  return (
    <div key={title} className="movie-cards">

      <div className="photo-and-details-container">
        <div className="photo-container">
          <img src={image_path} alt="image" onClick={() => handlePosterClick(title)}/>
        </div>
        <div className="details-container">
          <h1 onClick={() => handlePosterClick(title)}>
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
        {
        castData.length!==0?(
        castData.map((cast_details) => {
          return (
            <div key={castData.movie_id} className="grid-item-starcast">
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

}
      </div>
    </div>
  );
}

export default MovieCard;
