import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import MySearchBar from './searchBar';
import TracksScreen from './TracksScreen';

const { width } = Dimensions.get('window');

export default function MainScreen({ navigation }) {
  const searchQuery = useSelector((state) => state.SearchReducer.searchQuery);
  return (
    <View>
      <MySearchBar />
      <Text>qwe: {searchQuery} </Text>
      {/* <Text> searchQuery : {searchQuery} </Text> */}
      {searchQuery ? (
        // <Text> there is search val </Text>
        <TracksScreen />
      ) : (
        <Text> WELCOME ! please insert text val </Text>
      )}
    </View>
  );
}
