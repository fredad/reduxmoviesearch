// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';


export const loadMovies = (searchParam, dispatch) => {
  // fetch happens inside load request action creator!
  console.log(searchParam);
  // indicate we are loading movies now
  dispatch(requestMovies());


  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9b71c011&s=${searchParam}`)
  .then((response) => response.json())
  .then((responseJson) => {

    console.log(responseJson);

    if(responseJson.Response != 'False'){
      dispatch(someActionCreator(responseJson))
    }
    else{
      dispatch(handleFailure(responseJson))
    }
  })

  .catch((err) => {
      dispatch(handleFailure(err))
    }
  )
};

export const handleFailure = (err) => {
  return {
    type: LOAD_FAILURE,
    errorMessage: err.Error
  };
};


export const requestMovies = () => {
  return{
    type:LOAD_REQUEST
  } 
};

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    movies: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};
