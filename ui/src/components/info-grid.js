/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, ScrollView, View, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const InfoGrid = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const { noticeBoard } = props;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text>System Activity Monitoring Dashboard</Text>
        <ScrollView
          style={styles.scrollView}
          key={noticeBoard.lenght}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {noticeBoard.map((item) => (
            <Text style={styles.text} key={item.datestamp}>
              <Text>
                {item.datestamp}
                {':'}
              </Text>
              <Text style={styles.reportText}>
                {' '}
                {item.report}
              </Text>
            </Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default InfoGrid;

InfoGrid.propTypes = {
  noticeBoard: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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
  reportText: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
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
