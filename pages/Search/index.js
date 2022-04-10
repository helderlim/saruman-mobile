import * as React from 'react';
import { Text, View, Button, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState } from "react";
import Person from '../../components/Person';
import Icon from 'react-native-vector-icons/MaterialIcons'
const { width, height } = Dimensions.get('screen');

const imageW = width * 0.45;
const imageH = imageW * 0.6;

export default () => {
  const [image, setImage] = useState("");
  const [result, setResult] = useState([]);
  console.log('result', result)


  const handleChange = (event) => {
    console.log('event', event)
    setImage(event);
  };

  const handleSubmit = () => {
    console.log(image);
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&per_page=50&client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo";
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };


  return (
    <View>
      <View style={{marginLeft: 15, marginBottom: 10}}>
      <Text style={{fontSize: 36}}>Procurar</Text>
      <View className="input" style={{ display:'flex', flexDirection: 'row'}}>
        <TextInput onChangeText={handleChange} placeholder="useless placeholder"  style={{borderWidth: 2, width: width * 0.8, borderRadius: 10 }}/>
        <TouchableOpacity
        onPress={handleSubmit}
      >
        <Icon name="search" size={45} color='#000'/>
      </TouchableOpacity>
      </View>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={result}
            keyExtractor={(_, index) => index.toString()}
            pagingEnabled
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
                <Image source={{ uri: item.urls.regular }} style={{
                  width: imageW,
                  height: imageH,
                  marginLeft: 15,
                  marginBottom: 10,
                  borderRadius: 13
                }} />
                <Person profile={item.user} color={'black'} />
              </View>
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};