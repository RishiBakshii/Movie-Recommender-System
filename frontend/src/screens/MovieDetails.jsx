import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function MovieDetails() {
  const { name } = useParams();
  const [data, setData] = useState([]);
  alert(name)

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/getdetails/${name}`
      );
      const json = await response.json();
      setData(json.movieDetails);
    } catch (error) {
      alert("server is down☹️");
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ marginTop: "0rem" }} className="main">
        <div className="starcast-section">
          {data.length !== [] ? (

                <MovieCard
                  title={data.title}
                  release_date={data.release_date}
                  image_path={data.image_path}
                  genres={data.genres}
                  runtime={data.runtime}
                  user_rating={data.user_rating}
                  overview={data.overview}
                  handlePosterClick={null}
                  recommend={data}
                />
            )
           : (
            <h1 style={{ color: "white" }}>loading the data</h1>
          )}
        </div>

        {/* <section className="reviews-section">
          <h1>Reviews </h1>

          <div className="review-text-container">
            {
              state.recommendation.reviews.map((moviereview)=>{
                return <p>{moviereview}</p>
              })
            }
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}

export default MovieDetails;
