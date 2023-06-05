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

export default App;