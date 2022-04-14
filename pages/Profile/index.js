import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import axios from 'axios';
import Caroussel from '../../components/Caroussel/Caroussel';
import Person from '../../components/Person';
const { width, height } = Dimensions.get('screen');

const imageW = width * 0.45;
const imageH = imageW * 0.6;

export default () => {
  const [profile, setProfile] = useState('');
  console.log('profile', profile)
  const username = 'julie'

  useEffect(() => {
    async function getPost() {
      const response = await axios
        .get(
          `https://api.unsplash.com/users/${username}/?client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo`
        )
      setProfile(response.data)
    }
    getPost();
  }, [])

  return (
    <View>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image style={{height: 128, width:128, borderRadius:64 }}
        source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}}
        />
        <Text style={{fontSize: 36}}>{profile.name}</Text>
        <Text style={{fontWeight: 'bold'}}>São paulo - SP</Text>

      </View>
      <View>
        <TouchableOpacity>

        </TouchableOpacity>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>

      <Text style={{fontSize: 24}}>Dados pessoais</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Biometria cadastrada</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Pagamentos</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Anuncie seu espaço</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Central de atendimento</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Mande seu feedback</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Termos de serviço</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />
      <Text style={{fontSize: 24}}>Trocar de conta</Text>
      <View style={{height: 2, backgroundColor: 'black'}} />


    </View>
  );
};