import * as React from 'react';
import { FlatList, Image, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [];

const imageW = width * 1.00;
const imageH = imageW * 0.6;

export default (props) => {
  const listPhotos = props.listPhotos.map((urls) => urls.urls)
  return (
    <View style={{
      flex: 1, width: imageW,
      height: imageH,
    }}>
      <FlatList
        data={listPhotos}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return <View style={{ width, justifyContent: 'center' }}>
            <Image source={{ uri: item.regular }} style={{
              width: imageW,
              height: imageH,
              resizeMode: 'cover'
            }} />
          </View>
        }}
      />
    </View>
  );
};