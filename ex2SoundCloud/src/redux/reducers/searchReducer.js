import { UPDATE_TRACKS_ARRAY, SEARCH_QUERY } from '../types';

const initState = {
  searchQuery: '',
  tracks: [],
  isLoading: true,
  lastSearches: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      state.lastSearches.unshift(action.searchQuery);
      state.lastSearches = state.lastSearches.slice(0, 5);

      return {
        ...state,
        searchQuery: action.searchQuery,
        isLoading: true,
        lastSearches: [...state.lastSearches]
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
