import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ switchToRegistration }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleLogin = () => {
      console.log('Login Form Data:');
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.showPasswordButtonText}>
              {showPassword ? 'Скрыть' : 'Показать'}
            </Text>
          </TouchableOpacity>
        </View>
        <Button title="Войти" onPress={handleLogin} />
        <TouchableOpacity onPress={switchToRegistration}>
          <Text style={styles.switchText}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    passwordInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    passwordInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
    },
    showPasswordButton: {
      paddingHorizontal: 10,
    },
    showPasswordButtonText: {
      color: 'blue',
    },
    switchText: {
      color: 'blue',
      marginTop: 10,
      textAlign: 'center',
    },
    });

export default LoginScreen;
