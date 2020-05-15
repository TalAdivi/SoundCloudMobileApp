import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';
import clientID from '../globalConstants';
import { Media, Player } from 'react-media-player';
import { Video, Audio } from 'expo-av';
import axios from 'axios';
import { useSelector } from 'react-redux';

const { height, width } = Dimensions.get('window');

const songsAudio = new Audio.Sound();
const playSong = async (stream) => {
  await songsAudio.unloadAsync();
  await songsAudio.loadAsync({ uri: `${stream}?client_id=${clientID}` });
  await songsAudio.playAsync();
};

function ListImg({ title, comment_count, stream_url, image_url, user_name }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          playSong(stream_url);
        }}
      >
        {/* <Text>title : {title}</Text>
        <Text>duration : {duration}</Text> */}
        {/* <Text>VIDDDD</Text> */}

        {/* <View style={styles.viewListText}>
          <Image style={styles.listImg} source={{ uri: image_url }} />
          <View style={styles.listText}>
            <Text style={styles.titleText}> title: {title} </Text>
          </View>
          <View style={styles.listText}>
            <Text style={styles.titleTextName}> {user_name} </Text>
          </View>
          <View style={styles.listText}>
            <Text style={styles.titleText}> duration: {duration} </Text>
          </View>
        </View> */}
        <View style={styles.itemList}>
         
          <Image style={styles.imgList} source={{ uri: image_url }} />
          <View style={styles.textArea}>
            <Text style={styles.titleList}>{title}</Text>
            
            <View style={styles.itemList}>
              <Text style={styles.textList}>user_name: {user_name}</Text>
              <Text style={styles.textList}>comment_count: {comment_count}</Text>
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
  // console.log('allTracks = ', allTracks);
  // return (
  //   <View>
  //     <Text> blabla</Text>
  //   </View>
  // );

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <FlatList
      data={allTracks}
      renderItem={({ item }) => (
        <ListImg
          key={item.id}
          title={item.title}
          comment_count={item.comment_count}
          stream_url={item.stream_url}
          image_url={item.artwork_url}
          user_name={item.user.username}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

TracksScreen.propTypes = {};

export default TracksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 6
  },
  titleText: {
    fontSize: 15,
    fontWeight: '100',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    color: '#616161'
  },
  gridBtn: {
    flex: 1,
    flexDirection: 'column',
    margin: 3
  },
  gridImg: {
    flexBasis: 100,
    width: width / 3 - 5,
    height: height / 4
  },
  listText: {
    flexDirection: 'row',
    marginLeft: 5,
    height: height / 8,
    minWidth: width / 4
  },
  listImg: {
    flexBasis: 100,
    width: width / 5 - 5,
    height: height / 8
  },
  viewList: {
    margin: 3,
    marginVertical: 6,
    minWidth: width - 5
  },
  viewListText: {
    flexDirection: 'row',
    minWidth: width - 5,
    justifyContent: 'space-evenly'
  },
  viewLoading: {
    flex: 1,
    alignItems: 'center'
  },
  titleTextName: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#212121'
  },
  itemList: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  imgList: {
    margin: 8,
    width: 65,
    height: 65
  },
  textArea: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 8,
    paddingLeft: 8
  },
  textList: {
    flex: 1,
    fontSize: 14,
    color: 'grey'
  },
  titleList: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

{
  /* <Video
        source={{ uri: 'https://api.soundcloud.com/tracks/347063467/stream' }}
        volume={1.0}
        muted={false}

        // paused={paused}
        playInBackground
        playWhenInactive
        // onProgress={this.onPlayProgress}
        // onEnd={this.onPlayEnd}
        resizeMode="cover"
        repeat={false}
      /> */
}

{
  /* <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // Can be a URL or a local file.
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
      /> */
}

{
  /* <Video
        source={{
          uri:
            'https://cf-media.sndcdn.com/YjUzM3PzeMDG.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWWpVek0zUHplTURHLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODk0ODU1NzB9fX1dfQ__&Signature=a56IjoAJuslj4YiPf1A4viYpUGXiSP6n7QsDSOmiTiHywwjmEZYjWgH0C1Cj8DyMrSMQfR1SVUuirkQd1wko8cTPpbrSDJ~O6XvmzW~EWPye4LJgfBf-UTnSBOZ6oXh8gAjElg5m6RSGTB-HINeMToqlTsoJjRTGxVVtqJzC13XrjEp93DR6tFyqxJq1f-v~EBOCJcW3QRYKp5nZ~uGwRCoEaT3eHTMSn9BIaD5EJhcH53ETQ-jZL3lR9WayC5~qDSbXkO3LyZ8NvBlHbkvMium61WV2hkb2MUAZHSj1xEg0Tg3LsWM8gBRXRgQE94EblrlqPDMQLPafafO~IFdxoA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        isLooping
        onLoad={() => console.log('loaded!')}
        style={{ width: 300, height: 300, backgroundColor: 'blue' }}
      /> */
}
{
  /* <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="">
        {' '}
      </iframe> */
}
{
  // <iframe
  //   width="100%"
  //   height="166"
  //   scrolling="no"
  //   frameBorder="no"
  //   allow="autoplay"
  //   src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
  // />
}

{
  /* <WebView originWhitelist={['*']} source={{ html: '<h1>Hello world</h1>' }} /> */
}
{
  /* <WebView source={{ uri: 'https://infinite.red' }} style={{ marginTop: 20 }} /> */
}
{
  /* <Text>adfivi</Text> */
}
{
  /* <WebView originWhitelist={['*']} source={{ html: '<h1>Hello world!!</h1>' }} /> */
}
// </View>
