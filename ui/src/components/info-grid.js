/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { color } from 'react-native-material-design-styles';

const colorStyle = StyleSheet.create(color);

const InfoGrid = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const { noticeBoard } = props;

  return (
    <View style={styles.container}>
      <Text>System Activity Monitoring Dashboard</Text>
      <FlatList
        data={noticeBoard}
        renderItem={({ item }) => <Row item={item} />}
        keyExtractor={(item) => item.datestamp}
        refreshing={refreshing}
        onRefresh={onRefresh}
        style={styles.scrollView}
        extraData={() => true}
      />
    </View>
  );
};

export default InfoGrid;

InfoGrid.propTypes = {
  noticeBoard: PropTypes.arrayOf(PropTypes.object).isRequired,
  // item: PropTypes.objectOf.isRequired,
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
  reportText: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  reportText2: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: colorStyle.paperGrey100.color,
  },
});

function Row({ item }) {
  let reportTextStyle = styles.reportText;
  if (item.report.startsWith('elevator requested')) {
    reportTextStyle = styles.reportText2;
  }
  return (
    <View key={item.datestamp}>
      <Text style={reportTextStyle} key={item.datestamp}>
        <Text>
          {item.datestamp}
          {':'}
        </Text>
        {/*  */}
        <Text style={reportTextStyle}>
          {' '}
          {item.report}
        </Text>
      </Text>
    </View>
  );
}

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
