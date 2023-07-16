import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function MovieDetails() {
  const { movie_id } = useParams();

  const { state } = useLocation();

  return (
    <>
      <Navbar />
      <main style={{ marginTop: "0rem" }} className="main">
        <div className="starcast-section">
          <MovieCard
            title={state.title}
            release_date={state.release_date}
            image_path={state.image_path}
            genres={state.genres}
            runtime={state.runtime}
            user_rating={state.user_rating}
            overview={state.overview}
            handlePosterClick={null}
            recommend={state.recommendation}
          />
        </div>

        <section className="reviews-section">
          <h1>Reviews </h1>
          
          <div className="review-text-container">
            {
              state.recommendation.reviews.map((moviereview)=>{
                return <p>## {moviereview}</p>
              })
            }
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MovieDetails;
