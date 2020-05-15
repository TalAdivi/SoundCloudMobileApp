import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import { Media, Player } from 'react-media-player';
import { Video, Audio } from 'expo-av';
import axios from 'axios';

function ListImg({ title, views }) {
  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          await axios
            .get(
              'https://api.soundcloud.com/tracks/347063467/stream?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE'
            )
            .then((res) => console.log('res = ', res.request.responseURL));
        }}
      >
        <Text>VID</Text>
        {/* <Text>VIDDDD</Text> */}

        {/* <View style={styles.viewListText}>
          <Image style={styles.listImg} source={{ uri: smallImgURL }} />
          <View style={styles.listText}>
            <Text style={styles.titleText}> Views: {views} </Text>
          </View>
          <View style={styles.listText}>
            <Text style={styles.titleTextName}> {userName} </Text>
          </View>
          <View style={styles.listText}>
            <Text style={styles.titleText}> Likes: {likes} </Text>
          </View>
        </View> */}
      </TouchableOpacity>
    </View>
  );
}

const TracksScreen = () => {
  return (
    <>
      {/* <ScrollView style={{ flex: 1 }}>
       <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} /> */}

      <FlatList
        data={[{ a: 'a1', b: 'b2', id: 55 }]}
        renderItem={({ item }) => <ListImg title={item.a} views={item.b} />}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* <Video
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
      /> */}

      {/* <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // Can be a URL or a local file.
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
      /> */}

      {/* <Video
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
      /> */}
      {/* <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="">
        {' '}
      </iframe> */}
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

      {/* <WebView originWhitelist={['*']} source={{ html: '<h1>Hello world</h1>' }} /> */}
      {/* <WebView source={{ uri: 'https://infinite.red' }} style={{ marginTop: 20 }} /> */}
      {/* <Text>adfivi</Text> */}
      {/* <WebView originWhitelist={['*']} source={{ html: '<h1>Hello world!!</h1>' }} /> */}
    </>
  );
};

TracksScreen.propTypes = {};

export default TracksScreen;
