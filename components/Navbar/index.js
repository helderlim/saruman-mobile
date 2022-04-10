import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';


export default (props) => {
  const navigation = useNavigation();
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 5, marginBottom: 15}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
      >
        <Icon name="home" size={45} color='#000'/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
      >
        <Icon name="search" size={45} color='#000'/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
      >
        <Icon name="chat-bubble-outline" size={45} color='#000'/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
      >
        <Icon name="person" size={45} color='#000'/>
      </TouchableOpacity>
    </View>
  );
};