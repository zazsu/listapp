import React, {useContext, useState} from 'react';
import {View, Button, TextInput, Image, StyleSheet} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput style={styles.formInput}
        placeholder="Email"
        numberOfLines={1}
        autoCapitalize='none'
        textContentType='emailAddress'
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <TextInput style={styles.formInput}
        placeholder="Password"
        numberOfLines={1}
        autoCapitalize='none'
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <View style={styles.signInButton}>
      <Button color='coral'  title="Sign in" onPress={() => login(email, password)} />
      </View>
      <View style={styles.signUpButton}>
      <Button  title="Sign up" onPress={() => register(email, password)} />
     
    </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  signInButton: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'coral',
    color: 'white' },
  signUpButton: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  formInput: {
    height: 60,
    borderColor: '#dedede',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    fontSize: 16
  }
});