import { SEARCH_QUERY } from '../types';

const clientID = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE';

export const searchQueryAction = (searchQuery) => (dispatch) => {
  // console.log('inside searchQueryAction');
  // console.log('searchQuery = ', searchQuery);
  const searchTracksRequest = `https://api.soundcloud.com/tracks/?client_id=${clientID}&q=${searchQuery}`;
  dispatch({
    type: SEARCH_QUERY,
    searchQuery
  });
};

// export function
