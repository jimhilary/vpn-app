import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen({ navigation }: any) {
  return (
    
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../../assets/background.png")} style={styles.background}>
  <View style={{height:"50%"}}></View>
      <Text style={styles.title}>Welcome to PARA VPN</Text>
      <Text style={styles.subtitle}>
        PARA VPN is the fastest VPN with over 50 servers globally.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A1224', alignItems: 'center', justifyContent: 'center'},
  flagsContainer: { flexDirection: 'row', marginBottom: 40 },
  background: { flex: 1,justifyContent:"center", },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 ,textAlign:"center"},
  subtitle: { fontSize: 14, color: '#B0B0B0', textAlign: 'center', paddingHorizontal: 20 },
  button: { backgroundColor: '#3D72F1', paddingVertical: 12, paddingHorizontal: 32,marginHorizontal:10, borderRadius: 8, marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' ,textAlign:"center"},
});
