import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FetchLocation onGetLocation={getUserLocationHandler} />
    </View>
  );
}

getUserLocationHandler = () => {
  console.log("kiss my ass");
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  }, err => {
    console.err(err);
  })
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
