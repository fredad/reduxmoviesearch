// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state) => {
   return {
  	 movies: state.movies
 	}
};

const mapDispatchToProps = (dispatch) => {
 return {
   onSearchChange: (mov) => {
   	console.log(mov)
   	dispatch(loadMovies(mov, dispatch));
   }
 }
};


const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;