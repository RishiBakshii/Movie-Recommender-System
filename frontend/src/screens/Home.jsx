import React, { useEffect, useState } from "react";
import "./css/Home.css";
import "./css/HomeResponsive.css";
import Navbar from "../components/Navbar";

function Home() {
  const BASE_URL = "http://127.0.0.1:5000";

  const [movieList, setMovieList] = useState([]);
  const [selection, setSelecttion] = useState("");
  const [recommendations, setRecommendations] = useState([]);

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
                  <div className="grid-item">
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
                    <div className="movie-cards">
                      <div className="photo-and-details-container">
                        <div className="photo-container">
                          <img src={recommend.image_path} alt="image" />
                        </div>
                        <div className="details-container">
                          <h1>{recommend.title}</h1>
                          <p>{recommend.release_data}</p>
                          <p>{recommend.genres}</p>
                          <p>{recommend.runtime} mins</p>
                          <h2>User rating - {recommend.user_rating}</h2>
                          <h3>Overview</h3>
                          <p className="overview-text">{recommend.overview}</p>
                          <h4>StarCast</h4>
                        </div>
                      </div>
                      <div className="starcast-details-grid">
                        {recommend.cast.map((cast_details) => {
                          return (
                            <div className="grid-item-starcast">
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
                        })}
                      </div>
                    </div>
                  </>
                );
              })
            : ""}
        </section>
      </main>
    </>
  );
}

export default Home;
