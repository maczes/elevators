import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElevatorGrid from './components/ElevatorGrid';
import ElevatorGrid2 from './components/ElevatorGrid2';
//import FloorDropdown from './components/Dropdown';
import Dropdown3 from './components/Dropdown3';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Elevator Simulator</Text>
      <Text>----------------------</Text>
      {/* <ElevatorGrid/> */}
      <ElevatorGrid2/>
      <Dropdown3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
