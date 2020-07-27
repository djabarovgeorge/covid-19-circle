import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SearchInputAC from './SearchInputAC';

export default function MapCircle({ route, navigation }) {
  const [radius = route.params.radius, setRadius] = useState();
  const relativeZoom = 0.000075 * radius;
  const [
    myRegion = {
      latitude: route.params.coordinates.latitude,
      longitude: route.params.coordinates.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: relativeZoom,
    },
    setMyRegion,
  ] = useState();

  const initCenter = {
    latitude: myRegion.latitude,
    longitude: myRegion.longitude,
  };

  const handleSearch = (data) => {
    setMyRegion({
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      latitudeDelta: 0.001,
      longitudeDelta: relativeZoom,
    });
  };

  let handlePress = (data) => {
    setMyRegion({
      latitude: parseFloat(data.nativeEvent.coordinate.latitude),
      longitude: parseFloat(data.nativeEvent.coordinate.longitude),
      latitudeDelta: 0.001,
      longitudeDelta: relativeZoom,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={myRegion}
        onPress={handlePress}
      >
        <MapView.Circle
          center={initCenter}
          radius={radius}
          strokeWidth={2}
          strokeColor={'#1a66ff'}
          fillColor={'rgba(230,238,255,0.5)'}
        />
        <SearchInputAC onSearch={handleSearch} />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 0,
    position: 'relative',
    zIndex: 1,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  searchbar: {
    position: 'relative',
  },
  map: {
    position: 'absolute',
    zIndex: 2,
    top: 20,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
