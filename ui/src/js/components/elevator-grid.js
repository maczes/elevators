/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {
  Table,
  TableWrapper,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import PropTypes from 'prop-types';

export default class ElevatorGrid extends React.Component {
  constructor(props) {
    super(props);
    props.onElevatorGridLoad();
  }

  // componentWillMount() {
  //   setTimeout(() => {
  //     console.log('indicator timeout');
  //     this.props.isLoading = false;
  //   }, 3000);
  // }

  cancelable = () => true;

  render() {
    const { isLoading, rowTitle, tableData } = this.props;

    if (isLoading) {
      console.info('loading activity indicator');

      return (
        <View style={styles.indicator}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Table style={styles.table} borderStyle={styles.tableBorderStyle}>
          {/* Left Wrapper */}
          <TableWrapper style={styles.wrapperLeft}>
            <Cell data="" style={styles.singleHead} />
            <TableWrapper style={styles.wrapperLeftRows}>
              <Col data={['F']} style={styles.head} textStyle={styles.text} />
              <Col
                data={rowTitle}
                style={styles.title}
                heightArr={[30, 30, 30, 30, 30, 30, 30, 30]}
                textStyle={styles.titleText}
              />
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={styles.wrapperRight}>
            <Cols
              data={tableData}
              heightArr={[40, 30, 30, 30, 30, 30, 30, 30]}
              style={styles.title}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  }
}

ElevatorGrid.propTypes = {
  onElevatorGridLoad: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  rowTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

const singleHeadBgColor = '#c8e1ff';
const headBgColor = '#c8e1ff';
const titleBgColor = '#f6f8fa';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    paddingTop: 20,
    width: '80%',
    height: '20%',
  },
  singleHead: { width: 60, height: 40, backgroundColor: singleHeadBgColor },
  head: { flex: 1, backgroundColor: headBgColor },
  title: { flex: 1, backgroundColor: titleBgColor },
  // above: elevators IDs cell style; flex: 1 - this is cell division ratio
  titleText: { marginRight: 0, textAlign: 'center' },
  // above: elevators IDs cell text style;
  text: { textAlign: 'center' },
  wrapperLeft: { width: 60 },
  wrapperLeftRows: { flexDirection: 'row' },
  wrapperRight: { flex: 1, flexDirection: 'column' },
  table: { flexDirection: 'row' },
  tableBorderStyle: { borderWidth: 1 },
  indicator: { flex: 1, padding: 20 },
});
