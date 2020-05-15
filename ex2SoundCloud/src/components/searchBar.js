import React, { useState } from 'react';
import { SearchBar, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { searchQueryAction } from '../redux/actions/searchActions';

export default function searchBar() {
  //   const { setSearchQuery } = props;
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleUpdateSearch = (search) => {
    setSearch(search);
  };

  //   const handleSendSearchQuery = () => {
  //     // setSearchQuery(search);
  //     // searchQueryAction
  //   };

  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={handleUpdateSearch}
        value={search}
        lightTheme
        searchIcon={
          <Button
            color="#000000"
            buttonStyle={styles.btn}
            icon={<Icon name="image-search" size={30} />}
            title=""
            iconContainerStyle
            onPress={() => dispatch(searchQueryAction(search))}
          />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent'
  }
});
