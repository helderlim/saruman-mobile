import React, { useEffect ,useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function Feed({ navigation }) {
  const [photos, setPhotos] = useState([]);
  console.log('photos', photos)

  useEffect(() => {
    async function getPost() {
    const response = await axios
    .get(
      `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=hotels&client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo`
    )
    setPhotos(response.data.results)
    }
    getPost();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View>
      <Button
      title='Details'
      onPress={() => navigation.navigate('Details')}
      />
      {photos.length ? photos.map((pic) =>
      <View key={pic.id}>
        <Image
        style={styles.image}
        source={{
          uri: pic.urls.regular,
        }} />
        <Text>{pic.user.name}</Text>
      </View>
      )
      : <ActivityIndicator size="large" color="#0000ff" />
    }
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 600 ,
    width: 400
  }
});
