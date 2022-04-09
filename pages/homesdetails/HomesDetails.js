import React, { useEffect ,useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';

export default function HomeDetails({route}) {
  console.log('route', route)
  const [photos, setPhotos] = useState([]);
  console.log('photos', photos)

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
    <View>
      {photos.map((pic) =>
        <View key={pic.id}>
          <Image
            style={styles.image}
            source={{
              uri: pic.urls.regular,
            }} />
          <Text>{pic.user.name}</Text>
        </View>
      )}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 600 ,
    width: 400
  }
});
