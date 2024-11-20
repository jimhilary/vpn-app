import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';


export default function ServerScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Entypo name="arrow-left" size={24} color="white" style={styles.icon}/>

      </TouchableOpacity>
      <Text style={styles.title}>Select Server</Text>
      <Text style={styles.recent}>Your recent locations</Text>
      <View style={styles.serverContainer}>
        <View style={{flexDirection:"row",gap:10}}>
          <Image source={require('../../assets/belgium.png')} style={styles.icon} />
        <Text style={styles.status}>
            Belguim
        </Text>
        </View>
          <Image source={require('../../assets/3_bars.png')} style={styles.icon} />
      </View>     
      <View style={styles.serverContainer}>
        <View style={{flexDirection:"row",gap:10}}>
          <Image source={require('../../assets/Germany.png')} style={styles.icon} />
        <Text style={styles.status}>
            Germany
        </Text>
        </View>
          <Image source={require('../../assets/5_bars.png')} style={styles.icon} />
      </View>     
          <Image source={require('../../assets/advert.png')} style={styles.advert} />
      <Text style={styles.recent}>Your recent locations</Text>
      <View style={styles.serverContainer}>
        <View style={{flexDirection:"row",gap:10}}>
          <Image source={require('../../assets/France.png')} style={styles.icon} />
        <Text style={styles.status}>
        France
        </Text>
        </View>
          <Image source={require('../../assets/2_bars.png')} style={styles.icon} />
      </View> 
      <View style={styles.serverContainer}>
        <View style={{flexDirection:"row",gap:10}}>
          <Image source={require('../../assets/Canada.png')} style={styles.icon} />
        <Text style={styles.status}>
        Canada
        </Text>
        </View>
          <Image source={require('../../assets/4_bars.png')} style={styles.icon} />
      </View> 
      <View style={styles.serverContainer}>
        <View style={{flexDirection:"row",gap:10}}>
          <Image source={require('../../assets/Greece.png')} style={styles.icon} />
        <Text style={styles.status}>
        Greece
        </Text>
        </View>
          <Image source={require('../../assets/5_bars.png')} style={styles.icon} />
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
  serverContainer: { flexDirection: 'row',justifyContent:"space-between",marginVertical:10, alignItems: 'center', backgroundColor: '#1A2B48', padding: 10, borderRadius: 8, marginHorizontal: 10 ,gap:10},
  recent: { color: 'white', fontSize: 16,margin: 20 },
  status: { color: 'white', fontSize: 16,textAlign: 'center' },
  advert:{width:343,height:130, borderRadius:10,marginTop:10}
});
