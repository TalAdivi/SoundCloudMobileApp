import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import MySearchBar from './searchBar';
import TracksScreen from './TracksScreen';
import LastSearchesBtn from './LastSearchesBtn';
import { appBackgroundImg } from '../globalConstants';

export default function MainScreen() {
  const searchQuery = useSelector((state) => state.SearchReducer.searchQuery);
  return (
    <ImageBackground style={styles.flex} source={{ uri: appBackgroundImg }}>
      <View style={styles.container}>
        <MySearchBar />
        {searchQuery ? (
          <View style={styles.flex}>
            <ImageBackground style={styles.flex} source={{ uri: appBackgroundImg }}>
              <TracksScreen />
            </ImageBackground>
          </View>
        ) : (
          <View>
            <Text style={styles.welcomeTxt}>WELCOME !</Text>
            <Text style={styles.welcomeTxt}>Please insert song name</Text>
          </View>
        )}
        <View>
          <LastSearchesBtn />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  welcomeTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },
  flex: {
    flex: 1
  }
});
