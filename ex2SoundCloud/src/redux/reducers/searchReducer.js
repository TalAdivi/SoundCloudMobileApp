import { TEST, SEARCH_QUERY } from '../types';
import axios from 'axios';

const initState = {
  key: 'taladivi',
  searchQuery: '',
  tracks: []
};

const getTracksByName = async (trackName) => {
  const res = await axios({
    method: 'get',
    url: `https://api.soundcloud.com/tracks/?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q=${trackName}`
  }).then((res) => res.data);

  return res;
};

export default (state = initState, action) => {
  switch (action.type) {
    case TEST:
      getTracksByName(action.trackName).then((res) => res[2]); // TODO play count?

      return {
        ...state,
        key: action.test
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery
      };

    default:
      return state;
  }
};
