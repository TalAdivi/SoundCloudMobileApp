import { SEARCH_QUERY, UPDATE_TRACKS_ARRAY } from '../types';
import clientID from '../../globalConstants';
import axios from 'axios';

const getTracksByName = async (tracksToSearch) => {
  return await axios({
    method: 'get',
    url: `https://api.soundcloud.com/tracks/?client_id=${clientID}&q=${tracksToSearch}`
  }).then((res) => res.data);
};

export const searchQueryAction = (searchQuery) => (dispatch) => {
  // console.log('inside searchQueryAction');
  // console.log('searchQuery = ', searchQuery);
  // const searchTracksRequest = `https://api.soundcloud.com/tracks/?client_id=${clientID}&q=${searchQuery}`;
  // console.log('searchTracksRequest = ', searchTracksRequest);

  dispatch({
    type: SEARCH_QUERY,
    searchQuery
  });
};

export const updateTracksArray = (searchQuery) => (dispatch) => {
  // console.log('inside updateTracksArray!');
  getTracksByName(searchQuery).then((res) => {
    dispatch({
      type: UPDATE_TRACKS_ARRAY,
      tracks: res
    });
  });
};

// export function
