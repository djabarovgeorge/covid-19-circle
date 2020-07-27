import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import SearchInputAC from './SearchInputAC';

export default HomeScreen = ({ navigation }) => {
  const [radius, setRadius] = React.useState('100');
  const [
    coordinates = {
      latitude: 31.807601,
      longitude: 34.658361,
    },
    setCoordinates,
  ] = useState();

  const handleSearch = (data) => {
    setCoordinates({
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
    });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to your covid-19 radius restrictions</Text>

      <Text style={{ paddingTop: 23 }}>Radius : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(radius) => setRadius(radius)}
        value={radius}
      />

      <Text>Location : </Text>
      <SearchInputAC onSearch={handleSearch} />

      <Button
        title="Go to Map"
        onPress={() => {
          navigation.navigate('Map', {
            radius: parseInt(radius),
            coordinates: coordinates,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 150,
    margin: 15,
    height: 40,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    padding: 6,
  },
});
