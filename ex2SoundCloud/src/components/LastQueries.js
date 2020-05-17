import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { appBackgroundImg } from '../globalConstants';

export default function LastQueries() {
  const lastSearches = useSelector((state) => state.SearchReducer.lastSearches);
  return (
    <ImageBackground style={styles.flex} source={{ uri: appBackgroundImg }}>
      <View style={styles.searchesView}>
        <Text style={styles.text}>1 : {lastSearches[0]}</Text>
        <Text style={styles.text}>2: {lastSearches[1]}</Text>
        <Text style={styles.text}>3: {lastSearches[2]}</Text>
        <Text style={styles.text}>4: {lastSearches[3]}</Text>
        <Text style={styles.text}>5: {lastSearches[4]}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white'
  },
  flex: {
    flex: 1
  },
  searchesView: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    marginLeft: 18
  }
});
