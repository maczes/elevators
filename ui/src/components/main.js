/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MidGridContainer from '../containers/mid-grid-container';
import ElevatorGridContainer from '../containers/elevator-grid-container';
import InfoGridContainer from '../containers/info-grid-container';
import ErrorHandler from '../errors/error-handler';

export default function Main() {
  return (
    <View style={styles.topContainer}>
      <ErrorHandler>
        <View style={styles.elevatorGridContainer}>
          <Text>Elevator Simulator</Text>
          <Text>-------------------------</Text>
          <ElevatorGridContainer />
        </View>
        <View style={styles.midGridContainer}>
          <MidGridContainer />
        </View>
        <View style={styles.infoGridContainer}>
          <InfoGridContainer />
        </View>
      </ErrorHandler>
    </View>
  );
}

const gridContainerBgColor = 'white';
const midGridContainerBgColor = 'white';
const containerBgColor = '#daed09';

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: containerBgColor,
  },
  elevatorGridContainer: {
    flex: 1,
    backgroundColor: gridContainerBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    minHeight: '10%',
  },
  midGridContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: midGridContainerBgColor,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '10%',
    maxHeight: '10%',
  },
  infoGridContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});


// export default class Main extends React.Component {
//   render() {
//     return (
//       <View style={styles.topContainer}>

//         <View style={styles.elevatorGridContainer}>
//           <Text>Elevator Simulator</Text>
//           <Text>-------------------------</Text>
//           <ElevatorGridContainer />
//         </View>

//         <View style={styles.midGridContainer}>
//           <MidGridContainer />
//         </View>

//         <View style={styles.infoGridContainer}>
//           <InfoGridContainer />
//         </View>

//       </View>
//     );
//   }
// }
