import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Person from '../../components/Person';
import Caroussel from '../../components/Caroussel/Caroussel';

export default function Feed({ navigation }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await axios
        .get(
          `https://api.unsplash.com/search/photos/?page=2&per_page=20&query=hotels&client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo`
        )
      setPhotos(response.data.results)
    }
    getPost();
  }, [])

  const listPhotos = photos.map((urls) => urls.urls)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardList}>
          <Text style={styles.title}>Destaques da</Text>
          <Text style={styles.title}>Semana</Text>
          <Text style={styles.subtitle}>QUER VIAJAR HOJE?</Text>
          {photos.length
            ? photos.map((pic) =>
              <View key={pic.id} style={styles.card}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details', {
                    Profile: pic.user
                  })}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: pic.urls.regular,
                    }} />
                </TouchableOpacity>
                <Person profile={pic.user} color={'white'} />
              </View>
            ) : <ActivityIndicator size="large" color="#0000ff" />
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36
  },
  subtitle: {
    fontSize: 13,
    color: 'white'
  },
  image: {
    height: 343,
    width: 343,
    borderRadius: 16
  },
  cardList: {
  },
  card: {
    marginBottom: 12,
    display: 'flex'
  }
});
