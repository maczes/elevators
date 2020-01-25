/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, ScrollView, View,
} from 'react-native';
import PropTypes from 'prop-types';
import stringToHash from '../utils/hashcode-generator';

const InfoGrid = (props) => {
  const { noticeBoard } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text>System Activity Monitoring Dashboard</Text>
        <ScrollView style={styles.scrollView}>
          {noticeBoard.map((item) => (
            <Text style={styles.text} key={stringToHash(item)}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default InfoGrid;

// InfoGrid.propTypes = {
//   noticeBoard: PropTypes.arrayOf.isRequired,
// };

const bgColor = 'white';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: bgColor,
    marginHorizontal: 0,
  },
  text: {
    flex: 1,
    fontSize: 12,
  },
});

// export default class InfoGrid extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <SafeAreaView style={styles.container}>
//           <Text>System Activity Monitoring Dashboard</Text>
//           <ScrollView style={styles.scrollView}>
//             <Text style={styles.text}>
//               {this.props.noticeBoard}
//             </Text>
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//     );
//   }
// }
