import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App () {
return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background.jpg')} style={styles.image}>
        <View style={styles.innerThumb}>

        </View>
    </ImageBackground>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center",
  },
  innerThumb: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 263,
    borderRadius: 25,
  },
  text: {
    color: '#fff',
    fontSize: 48,
  }
});