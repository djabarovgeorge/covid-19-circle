import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const API_KEY = 'AIzaSyDA_pIVbqLcv644xFz5Dl8gRtZMvcDD5Qo';

export default SearchInputAC = ({ navigation, onSearch }) => {
  const getCoordinates = (placeID) => {
    fetch(
      'https://maps.googleapis.com/maps/api/place/details/json?key=' +
        API_KEY +
        '&place_id=' +
        placeID +
        '&fields=geometry'
    )
      .then((response) => response.json())
      .then((data) =>
        onSearch({
          latitude: data.result.geometry.location.lat,
          longitude: data.result.geometry.location.lng,
        })
      );
  };

  return (
    <GooglePlacesAutocomplete
      query={{
        key: API_KEY,
        language: 'he', // language of the results
      }}
      onPress={(data, details = null) => {
        getCoordinates(data.place_id);
      }}
      onFail={(error) => console.error(error)}
      styles={{
        position: 'absolute',
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          width: 150,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 14,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  );
};
