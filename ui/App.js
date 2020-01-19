import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElevatorGrid from './components/ElevatorGrid';
import ElevatorGrid2 from './components/ElevatorGrid2';
import Dropdown3 from './components/Dropdown3';
import ActionButton from './components/ActionButton';
import MidGrid from './components/MidGrid'

import Config from 'react-native-config'

const Cfg = {
  NUMBER_OF_ELEVATORS: `${Config.NUMBER_OF_ELEVATORS || '4'}`,
};

export default function App() {

  return (
    <View style={styles.top_container}>

      <View style={styles.grid_container}>
        <Text>Elevator Simulator</Text>
        <Text>-------------------------</Text>
        <Text>{Cfg.NUMBER_OF_ELEVATORS}</Text>
        <ElevatorGrid2 />
      </View >

      <View style={styles.label}>
        <Text>Pick up start and target floor below</Text>
      </View>

      {/* <View style={stylesMidGrid.container}>
        <Dropdown3 caption="from floor:" />
        <Dropdown3 caption="to floor:" />
        <ActionButton />
      </View> */} 

      <MidGrid/>

      <View style={stylesDashboard.container}>
        <Text>System Activity Dashboard</Text>
      </View>

    </View>
  );
}

const stylesDashboard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#0000aa'
    //height: '10%'
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
    maxHeight: '10%'
  }
});

const styles = StyleSheet.create({
  top_container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#daed09'
  },
  grid_container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
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
    //flex: 1,
    backgroundColor: '#fffddd',
    alignItems: 'center',
    height: '3%'
  }

});
