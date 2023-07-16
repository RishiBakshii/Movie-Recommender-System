import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";
import "./css/HomeResponsive.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

function Home() {
  const BASE_URL = "http://127.0.0.1:5000";

  const [movieList, setMovieList] = useState([]);
  const [selection, setSelecttion] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  const getMovieList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/getmovienames`);

      if (response.ok) {
        const json = await response.json();
        setMovieList(() => json.movie_list);
      } else {
        alert("Error fetching the data");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}/getrecommendations/${selection}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      setRecommendations(json.recommendations);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePosterClick = (movie_id,title,release_date,image_path,genres,runtime,user_rating,overview,recommendation) => {

    navigate(`/moviedetails/${movie_id}`, {
      state: {
        movie_id:movie_id,
        title: title,
        release_date: release_date,
        image_path: image_path,
        genres: genres,
        runtime: runtime,
        user_rating: user_rating,
        overview: overview,
        recommendation: recommendation,
      },
    });
  };

  return (
    <>
      <Navbar />
      <main className="main">
        <form onSubmit={handleFormSubmit}>
          <section className="recommendation-section">
            <select
              required
              name="selected-movie"
              id="select-box"
              value={selection}
              onChange={(e) => setSelecttion(e.target.value)}
            >
              <option disabled selected value="">
                {movieList.length !== 0
                  ? "Select a Movie"
                  : "Loading Movies 🍔"}
              </option>

              {movieList.map((movie) => {
                return (
                  <option key={movie} value={movie}>
                    {movie}
                  </option>
                );
              })}
            </select>

            <button className="recommend-btn" type="submit" id="recommend-btn">
              Recommend
            </button>

            <div className="recommendation-result-grid">
              {recommendations.map((recommendation) => {
                return (
                  <div
                    key={recommendation.title}
                    className="grid-item"
                    onClick={() =>
                      handlePosterClick(
                        recommendation.movie_id,
                        recommendation.title,
                        recommendation.release_date,
                        recommendation.image_path,
                        recommendation.genres,
                        recommendation.runtime,
                        recommendation.user_rating,
                        recommendation.overview,
                        recommendation
                      )
                    }
                  >
                    <div className="layout">
                      <img src={recommendation.image_path} alt="movie poster" />
                      <p>{recommendation.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </form>

        <section className="starcast-section">
          {recommendations.length !== 0
            ? recommendations.map((recommend) => {
                return (
                  <>
                    <MovieCard
                      key={recommend.title}
                      title={recommend.title}
                      release_date={recommend.release_date}
                      image_path={recommend.image_path}
                      genres={recommend.genres}
                      runtime={recommend.runtime}
                      user_rating={recommend.user_rating}
                      overview={recommend.overview}
                      handlePosterClick={handlePosterClick}
                      recommend={recommend}
                    />
                  </>
                );
              })
            : ""}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
