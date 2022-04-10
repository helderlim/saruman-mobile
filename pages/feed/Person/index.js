import * as React from 'react';
import { Image, Text, View } from 'react-native';

export default (props) => {
  const data = props.profile
  const profile = {
    image: data.profile_image.large,
    name: data.first_name + ' ' + data.last_name,
    username: data.username
  }
  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
      <Image
        source={{ uri: profile.image }}
        style={{ height: 45, width: 45, borderRadius: 45 / 2 }}
      />
      <View>
        <Text style={{ color: 'white' }}>{profile.name}</Text>
        <Text style={{ color: 'white' }}>@{profile.username}</Text>
      </View>
    </View>
  );
};