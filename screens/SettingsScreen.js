import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {

  const {user, logout} = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logged in as</Text>
      <Text style={styles.text}>{user.email}</Text>
      <View style={styles.logoutButton}><Button  title='Logout' color='coral' buttonTitle='Logout' onPress={() => logout()} /></View>
      
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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