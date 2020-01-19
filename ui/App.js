import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElevatorGrid from './src/components/ElevatorGrid';
import MidGrid from './src/components/MidGrid'
import InfoGrid from './src/components/InfoGrid'

import Config from 'react-native-config'

const Cfg = {
  NUMBER_OF_ELEVATORS: `${Config.NUMBER_OF_ELEVATORS || '4'}`,
  MAIN_COLOR: `${Config.MAIN_COLOR || 'white'}`,
};

export default function App() {

  return (
    <View style={styles.top_container}>

      <View style={styles.grid_container}>
        <Text>Elevator Simulator</Text>
        <Text>-------------------------</Text>
        <ElevatorGrid />
      </View >

      <View style={stylesMidGrid.container}>
        <MidGrid />
      </View>

      <View style={stylesDashboard.container}>
        <InfoGrid />
      </View>

    </View>
  );
}

const stylesDashboard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
});

const stylesMidGrid = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '10%',
    maxHeight: '10%',
  }
});

const styles = StyleSheet.create({
  top_container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#daed09',
  },
  grid_container: {
    flex: 1,
    backgroundColor: Cfg.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    minHeight: '10%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  label: {
    backgroundColor: '#fffddd',
    alignItems: 'center',
    height: '3%',
  }

});


/**
 * colors:
 * red: '#ff4534',
 */