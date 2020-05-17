import { SEARCH_QUERY, UPDATE_TRACKS_ARRAY } from '../types';
import { clientID } from '../../globalConstants';
import axios from 'axios';

const getTracksByName = async (tracksToSearch) => {
  return await axios({
    method: 'get',
    url: `https://api.soundcloud.com/tracks/?client_id=${clientID}&q=${tracksToSearch}`
  }).then((res) => res.data);
};

export default (searchQuery) => (dispatch) => {
  dispatch({
    type: SEARCH_QUERY,
    searchQuery
  });

  getTracksByName(searchQuery).then((res) => {
    dispatch({
      type: UPDATE_TRACKS_ARRAY,
      tracks: res
    });
  });
};
