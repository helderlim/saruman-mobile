import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import Caroussel from '../../components/Caroussel/Caroussel';

export default function HomeDetails({ route }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await axios
        .get(
          `https://api.unsplash.com/users/${route.params.ProfileName}/photos?per_page=15&orientation=portrait&page=1&client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo`
        )
      setPhotos(response.data)
    }
    getPost();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Caroussel name='nome do prop' listPhotos={photos} />
        <View>
          {/* {photos.map((pic) =>
        <View key={pic.id}>
          <Image
            style={styles.image}
            source={{
              uri: pic.urls.regular,
            }} />
          <Text>{pic.user.name}</Text>
        </View>
      )} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  image: {
    height: 600,
    width: 400
  }
});
