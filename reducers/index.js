import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from '../actions';
import thunk from 'redux-thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  movies: [{
    imdbID:'tt1111111',
    Title:'placeholder'
  }]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_REQUEST: 
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: true,
        movies: action.movies
      };
    }

    case LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };
    }

    default:
      return state;
  }
}