import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./screens/MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/moviedetails/:movieid" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
