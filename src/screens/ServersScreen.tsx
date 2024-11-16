import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';


const servers = [
  { id: '1', name: 'Netherlands', flag: require('../../assets/flag-1.png') },
  { id: '2', name: 'United States', flag: require('../../assets/flag-1.png') },
  { id: '3', name: 'Switzerland', flag: require('../../assets/flag-1.png') },
];

export default function ServerScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Entypo name="arrow-left" size={24} color="white" style={styles.icon}/>

      </TouchableOpacity>
      <Text style={styles.title}>Select Server</Text>
      <Text style={styles.recent}>Your recent locations</Text>
      <View style={styles.serverContainer}>
          <Image source={require('../../assets/belgium.png')} style={styles.icon} />
        <Text style={styles.status}>
          Belgium
        </Text>
      </View>      <View style={styles.serverContainer}>
          <Image source={require('../../assets/belgium.png')} style={styles.icon} />
        <Text style={styles.status}>
          Belgium
        </Text>
      </View>
          <Image source={require('../../assets/advert.png')} style={styles.advert} />
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
  container: { flex: 1, backgroundColor: '#0A1224',paddingHorizontal:10},
  backButton: { marginBottom: 20 },
  backText: { color: 'white', fontSize: 16 },
  title: { fontSize: 18, color: 'white', marginBottom: 20 },
  server: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  icon: { width: 24, height: 24 },
  flag: { width: 30, height: 30, marginRight: 10 },
  serverName: { color: 'white', fontSize: 16 },
  serverContainer: { flexDirection: 'row',marginVertical:10, alignItems: 'center', backgroundColor: '#1A2B48', padding: 10, borderRadius: 8, marginHorizontal: 10 ,gap:10},
  recent: { color: 'white', fontSize: 16,margin: 20 },
  status: { color: 'white', fontSize: 16,textAlign: 'center' },
  advert:{width:343,height:130, borderRadius:10}
});
