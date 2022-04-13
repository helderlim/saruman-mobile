import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './pages/feed/Feed';
import HomeDetails from './pages/homesdetails/HomesDetails';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Chat from './pages/Chat';
import MapPage from './pages/MapPage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={HomeDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
        <Stack.Screen name="Maps" component={MapPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <Navbar />
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
