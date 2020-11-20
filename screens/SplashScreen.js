import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/logo.png')}></Image> 
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  text: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center'
  },
  logoutButton: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'coral',
    color: 'white'
  }
});