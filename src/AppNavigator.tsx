import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import ServersScreen from './screens/ServersScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#0B1023', paddingBottom: 5 } }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
      }} />
      <Tab.Screen name="Servers" component={ServersScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="server-outline" size={24} color={color} />,
      }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}
