import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LastSearchesBtn({ navigation = useNavigation() }) {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        navigation.navigate('lastQueries');
      }}
    >
      <Text style={styles.text}> Last Searches</Text>
    </TouchableOpacity>
  );
}

LastSearchesBtn.propTypes = {
  navigation: PropTypes.object
};
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f48020',
    paddingVertical: 5
  }
});
