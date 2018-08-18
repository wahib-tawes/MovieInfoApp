import React from "react";
import ReactDOM from "react-dom";
import MovieContainer from "./MovieList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MovieContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
