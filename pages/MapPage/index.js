import * as React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('screen');


export default () => {
  return (
    <View style={{flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20}}>
      <Text>Maps Page</Text>
      <MapView style={{height: 600, width: width-40}}
    initialRegion={{
      latitude: -20.814081283285383,
      longitude: -49.38124976754831,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    </View>
  );
};