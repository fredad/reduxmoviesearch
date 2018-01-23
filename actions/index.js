// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

// action creators go here

export function loadMovies(searchParam, dispatch){
	// fetch happens inside load request action creator!
  return function(dispatch){
  // indicate we are loading movies now
    //dispatch(requestMovies());

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=88aa8b1e&s=${searchParam}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      // "we successfully got back a response" scenario
      // requirement: generate a view with the movie results upon successfully getting a response
      // --> do things here that will eventually update the view

      // dispatch EMITS AN ACTION
      // (an action <--> view only)
      // --> dispatch change the view to the success view

        dispatch({
          type: LOAD_SUCCESS,
          movies: responseJson.Search
        })
    })
  }
  // ...what about failure?...
};

export const requestMovies = () => {
  return{
    type:LOAD_REQUEST
  } 
};

// export const someActionCreator = (jsonData) => {
//   return {
//     type: LOAD_SUCCESS,
//     // anything else you want!!
//     // include movies coming from the data
//     data: jsonData.Search
//     // TODO: handle edge cases: null response, no search results
//   }
// };