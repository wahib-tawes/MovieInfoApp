import React from "react";
import MovieCard from "./Movie";
import Movies from "./Data";
import Spinner from "./Spinner/Spinner";
import "./Spinner/Spinner.css";
class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isAddDisplayed: false,
      isFilmsDisplayed: true,
      movies: Movies,
      stars: "",
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
  }

  display() {
    const { loading } = this.state;
    if (loading) {
      return <div className="loader" />;
    } else {
      return (
        <div className="movie-list">
          {this.state.isFilmsDisplayed &&
            Movies.map(e => <MovieCard movieItem={e} />)}
        </div>
      );
    }
  }
  render() {
    return <div>{this.display()}</div>;
  }
}
export default MovieContainer;
