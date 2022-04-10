import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './pages/feed/Feed';
import HomeDetails from './pages/homesdetails/HomesDetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={HomeDetails} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});
