import React, { useEffect, useState } from 'react';
import { Image, Text, View, Dimensions, TextInput, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const { width, height } = Dimensions.get('screen');


export default () => {

  const [finishedTimeout, setFinishedTimeout] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState({
    latitude: -24.182616600027032,
    longitude: -46.787289188403264,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  console.log('region', region)

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 1500);
  })

  function newMarker(e) {
    console.log('e',)

    let dataMarker = {
      key: markers.length,
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      },
      pinColor: '#B657CA'
    }

    setRegion({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })

    setMarkers(oldArray => [...oldArray, dataMarker])
  }



  return (
    <View style={{
      flex: 1,
      marginTop: 20
    }}>
      {finishedTimeout ?
        <>
          <ScrollView>
            <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 36 }}>Search</Text>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TextInput placeholder="   Search Location" style={{ borderWidth: 2, width: width * 0.95, borderRadius: 3, marginBottom: 10 }} />
              <View style={{ backgroundColor: 'black', padding: 2, borderRadius: 5 }}>
                <MapView style={{ height: 550, width: width - 20 }}
                 region={region}
                 zoomEnabled={true}
                 showsUserLocation={true}
                 loadingEnabled={true}
                  onPress={(e) => newMarker(e)}
                >
                  {markers.map(marker =>{
                    return (
                      <Marker 
                      key={marker.key}
                      coordinate={marker.coords}
                      image={require("../../assets/marker64.png")}
                      />
                    )
                  })}
                </MapView>
              </View>
            </View>
          </ScrollView>
        </> : <Image source={require('../../assets/map.png')} style={{ display: 'flex', height: height, width: width }} />}

    </View>
  )
}