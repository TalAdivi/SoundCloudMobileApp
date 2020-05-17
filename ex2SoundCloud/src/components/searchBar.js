import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import searchQueryAction from '../redux/actions/searchActions';

export default function searchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleUpdateSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      <SearchBar
        placeholder="Song name..."
        onChangeText={handleUpdateSearch}
        value={search}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        searchIcon={
          <Button
            color="#000000"
            buttonStyle={styles.btn}
            icon={<Icon name="soundcloud" size={30} />}
            iconContainerStyle
            onPress={() => dispatch(searchQueryAction(search))}
          />
        }
        onSubmitEditing={() => dispatch(searchQueryAction(search))}
      />
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent'
  },
  containerStyle: {
    backgroundColor: 'black'
  },
  inputContainerStyle: {
    backgroundColor: '#333333'
  },
  inputStyle: {
    color: 'white'
  }
});
