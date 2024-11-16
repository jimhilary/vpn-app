import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Image source={require('../assets/menu-icon.png')} style={styles.icon} /> */}
          <Entypo name="menu" size={24} color="white" style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.title}>PARA VPN</Text>
        <TouchableOpacity >
          <Entypo name="location" size={24} color="white" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <TouchableOpacity onPress={()=> navigation.navigate('Servers')}>
          <Image source={require('../../assets/button.png')} style={styles.powerIcon} />
        </TouchableOpacity>
        <Text style={styles.status}>Connected</Text>
        <Text style={styles.location}>Your Current Location: Netherlands</Text>
        <View style={styles.speedContainer}>
          <View style={styles.speed}>
            <Text style={styles.speedText}>25MB/S</Text>
          </View>
          <View style={styles.speed}>
            <Text style={styles.speedText}>15KB/S</Text>
          </View>
        </View>
        {/* Add list of recent locations */}
      </View>
        <Text style={styles.recent}>Your recent locations</Text>
      <View style={styles.serverContainer}>
          <Image source={require('../../assets/belgium.png')} style={styles.icon} />
        <Text style={styles.status}>
          Belgium
        </Text>
      </View>
      <View style={styles.serverContainer}>
          <Image source={require('../../assets/belgium.png')} style={styles.icon} />
        <Text style={styles.status}>
          Belgium
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A1224',paddingBottom:60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
  icon: { width: 24, height: 24 },
  title: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  main: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  powerIcon: { width: 150, height: 150 },
  status: { color: 'white', fontSize: 16,textAlign: 'center' },
  location: { color: '#B0B0B0', fontSize: 14, marginTop: 5 },
  speedContainer: { flexDirection: 'row', marginTop: 20 },
  serverContainer: { flexDirection: 'row',marginVertical:10, alignItems: 'center', backgroundColor: '#1A2B48', padding: 10, borderRadius: 8, marginHorizontal: 10 ,gap:10},
  speed: { backgroundColor: '#1A2B48', padding: 10, borderRadius: 8, marginHorizontal: 5 },
  speedText: { color: 'white' },
  recent: { color: 'white', fontSize: 16,margin: 20 },

});
