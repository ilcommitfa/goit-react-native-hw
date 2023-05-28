import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import RegistrationScreen from './assets/Screens/RegistrationScreen';
import LoginScreen from './assets/Screens/LoginScreen';

const App = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(false);

  const switchToLogin = () => {
    setIsLoginScreen(true);
  };

  const switchToRegistration = () => {
    setIsLoginScreen(false);
  };

  return (
    <>
      {isLoginScreen ? (
      <LoginScreen switchToRegistration={switchToRegistration} />
  ) : (
      <RegistrationScreen switchToLogin={switchToLogin} />
  )}
    </>

);
};

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: "center",
//     // position: 'absolute',
//     // top: 0,
//     // right: 0,
//     // bottom: 0,
//     // left: 0
//     width: '100%',
//     height: '100%',
//     },
//   });

export default App;