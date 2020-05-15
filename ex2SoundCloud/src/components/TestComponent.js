import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { customAction } from '../redux/actions/searchActions';
import axios from 'axios';

const TestComponent = ({ navigation }) => {
  const key = useSelector((state) => state.TestReducer.key);
  const tracks = useSelector((state) => state.TestReducer.tracks);
  const dispatch = useDispatch();
  console.log(key);

  return (
    <View>
      <Text> KEY : {key} </Text>
      {console.log('navigation = ', navigation)}
      {/* <Text> oneTrack : {tracks[0]} </Text> */}

      {/* {console.log('tracks[0] = ', tracks} */}
      <Button title="testBTN" onPress={() => dispatch(customAction())} />
    </View>
  );
};

export default TestComponent;

//   useEffect(() => {
//     const req = async () => {
//       const res = await axios
//         .get(
//           'https://api.soundcloud.com/tracks/?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q=sababa'
//         )
//         .then((res) => console.log(res));
//     };

//     req()
//   }, []);
