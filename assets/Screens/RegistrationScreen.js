import React, { useState } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';

const initialState = {
  username: '',
  email: '',
  password: '',
}

const RegistrationScreen = ({ switchToLogin }) => {
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  
const handleRegistration = () => {
  console.log(state);
  setIsKeyboardOpen(false);
  Keyboard.dismiss();
};
  
return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <ImageBackground source={require('../images/background.jpg')} style={styles.background}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <View style={{...styles.form, paddingBottom: isKeyboardOpen ? 0 : 78}}>
            <Text style={styles.header}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(value) => setState((prevState) => ({...prevState, username: value}))}
              onFocus={() => setIsKeyboardOpen(true)}
            />
           <TextInput
             style={styles.input}
             placeholder="Email"
             keyboardType="email-address"
             onFocus={() => setIsKeyboardOpen(true)}
             onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
           />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
            secureTextEntry={!showPassword}
            onFocus={() => setIsKeyboardOpen(true)}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.showPasswordButtonText}>
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleRegistration}>
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={switchToLogin}>
          <Text style={styles.switchText}>Already have an account? Enter</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      </View>

      </TouchableWithoutFeedback>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'flex-end',
    },
    form: {
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 25,  
      borderTopRightRadius: 25,
      // paddingBottom: 78,
      paddingTop: 92,
    },
    header: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 32,
    },
    input: {
      height: 50,
      fontSize: 16,
      backgroundColor: '#f6f6f6',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 8,
      marginBottom: 16,
      marginHorizontal: 16,
      paddingHorizontal: 16,
    },
    passwordInputContainer: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 16,
      marginBottom: 43,
      borderWidth: 1,
      paddingHorizontal: 16,
      backgroundColor: '#f6f6f6',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 8,
    },
    passwordInput: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      borderColor: '#E8E8E8',
      fontSize: 16,
    },
    showPasswordButtonText: {
      color: '#1B4371',
      fontSize: 16,
    },
    switchText: {
      color: '#1B4371',
      marginTop: 16,
      textAlign: 'center',
    },
    button: {
      height: 50,
      backgroundColor: '#FF6C00',
      marginHorizontal: 16,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#ffffff',
      fontSize: 16,
    },
    });
    
export default RegistrationScreen;
