import React, { useEffect, useState } from 'react';
import { Image, Text, View, Dimensions, TextInput, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('screen');

export default () => {

  const [finishedTimeout, setFinishedTimeout] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 1500);
  })
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
                  initialRegion={{
                    latitude: -20.814081283285383,
                    longitude: -49.38124976754831,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
              </View>
            </View>
            </ScrollView>
          </> : <Image source={require('../../assets/map.png')} style={{display: 'flex', height: height, width: width}} />}

      </View>
    )
  }