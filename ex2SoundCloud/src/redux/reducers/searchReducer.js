import { UPDATE_TRACKS_ARRAY, SEARCH_QUERY } from '../types';

const initState = {
  key: 'taladivi',
  searchQuery: '',
  tracks: [],
  isLoading: true,
  lastSearches: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      // console.log('action.searchTracksRequest[1] = ', action.searchTracksRequest[1])
      // console.log('action.tracks[0] = ', action.tracks[0]);
      state.lastSearches.unshift(action.searchQuery);
      return {
        ...state,
        searchQuery: action.searchQuery,
        isLoading: true
      };

    case UPDATE_TRACKS_ARRAY:
      return {
        ...state,
        tracks: action.tracks,
        isLoading: false
      };

    default:
      return state;
  }
};
