import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { clientID, defaultTrackImg } from '../globalConstants';
import { Audio } from 'expo-av';
import { useSelector } from 'react-redux';

const songsAudio = new Audio.Sound();
const playSong = async (stream) => {
  await songsAudio.unloadAsync();
  await songsAudio.loadAsync({ uri: `${stream}?client_id=${clientID}` });
  await songsAudio.playAsync();
};

function ListImg({ title, playback_count, stream_url, image_url, user_name }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          playSong(stream_url);
        }}
      >
        <View style={styles.itemView}>
          <Image
            style={styles.imgIcon}
            source={{ uri: image_url === null ? defaultTrackImg : image_url }}
          />
          <View style={styles.textView}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.itemView}>
              <Text style={styles.textGrey}>user : {user_name}</Text>
              <Text style={styles.textGrey}>play count: {playback_count}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const TracksScreen = () => {
  const allTracks = useSelector((state) => state.SearchReducer.tracks);
  const isLoading = useSelector((state) => state.SearchReducer.isLoading);

  return isLoading ? (
    <ActivityIndicator size="large" color="orange" />
  ) : allTracks.length > 0 ? (
    <View>
      <FlatList
        data={allTracks}
        renderItem={({ item }) => (
          <ListImg
            key={item.id}
            title={item.title}
            playback_count={item.playback_count}
            stream_url={item.stream_url}
            image_url={item.artwork_url}
            user_name={item.user.username}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  ) : (
    <View style={styles.noResView}>
      <Text style={styles.noResText}>No Results Found!</Text>
    </View>
  );
};

ListImg.propTypes = {
  title: PropTypes.string,
  playback_count: PropTypes.number,
  stream_url: PropTypes.string,
  image_url: PropTypes.string,
  user_name: PropTypes.string
};

export default TracksScreen;

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  imgIcon: {
    margin: 8,
    width: 65,
    height: 65
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 8,
    paddingLeft: 8
  },
  textGrey: {
    flex: 1,
    fontSize: 14,
    color: 'grey'
  },
  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  noResView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noResText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  }
});
