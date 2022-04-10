import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, FlatList, Dimensions } from 'react-native';
import axios from 'axios';
import Caroussel from '../../components/Caroussel/Caroussel';
import Person from '../../components/Person';
const { width, height } = Dimensions.get('screen');

const imageW = width * 0.45;
const imageH = imageW * 0.6;

export default function HomeDetails({ route }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await axios
        .get(
          `https://api.unsplash.com/users/${route.params.Profile.username}/photos?per_page=15&orientation=portrait&page=1&client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo`
        )
      setPhotos(response.data)
    }
    getPost();
  }, [])
  const profile = route.params.Profile
  console.log('profile', profile)

  const listPhotos = photos.map((urls) => urls.urls)

  let chunks = [], i = 0, n = listPhotos.length
  while (i < n) {
    chunks.push(listPhotos.slice(i, i += 6))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Caroussel listPhotos={photos} />
        <View style={{ marginLeft: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 36, fontWeight: 'bold' }}>{profile.last_name}</Text>
            <Text style={{ fontSize: 20 }}>{profile.location}</Text>
          </View>
          <Person profile={profile} color={'#000'} />
          <View style={{ width: width * 0.9, alignItems: 'center' }}>
            <Text style={{ textAlign: 'justify' }}>{profile.bio}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>{profile.total_likes} Avaliações - {profile.total_photos} Estadias</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={chunks[0]}
            keyExtractor={(_, index) => index.toString()}
            pagingEnabled
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.regular }} style={{
                  width: imageW,
                  height: imageH,
                  marginLeft: 15,
                  marginBottom: 10,
                  borderRadius: 13
                }} />
              </View>
            }}
          />
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
    backgroundColor: '#fff'
  },
  image: {
    height: 600,
    width: 400
  },
  title: {
    color: 'white',
    fontSize: 36
  },
  subtitle: {
    fontSize: 13,
    color: 'white'
  },
  cardList: {
  },
  card: {
    marginBottom: 12,
    display: 'flex'
  }
});
