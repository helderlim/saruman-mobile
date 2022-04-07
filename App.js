import React, { useEffect ,useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import api from './services/api'

export default function App() {
  const [photos, setPhotos] = useState([]);
  console.log('photos', photos)

   useEffect(() => {
    async function getPost() {
    const response = await api.get()
    setPhotos(response.data)
    }
    getPost();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      {photos.map((pic) =>
      <View key={pic.id}>
        <Image
        style={styles.image}
        source={{
          uri: pic.urls.full,
        }} />

      </View>
      )
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
    width: 600
  },
  image: {
    height: 300,
    width: 100
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
