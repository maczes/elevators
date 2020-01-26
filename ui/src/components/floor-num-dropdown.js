/* eslint-disable no-use-before-define */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import DropdownMenu from 'react-native-dropdown-menu';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    props.resetComponent();
    props.loadDropdownData();
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>

        <DropdownMenu
          style={styles.dropdown}
          bgColor="3654356"
          tintColor="#666666"
          activityTintColor="green"
          titleStyle={styles.dropdownTitle}
          maxHeight={95}

          handler={(selection, row) => {
            if (selection === 0) {
              this.props.onFromFloorClick({
                fromFloor: data[selection][row],
                toFloor: this.props.floorTo,
              });
            } else if (selection === 1) {
              this.props.onToFloorClick({
                toFloor: data[selection][row],
                fromFloor: this.props.fromFloor,
              });
            } else {
              console.error("can't assign selection: ", selection);
            }
          }}
          data={data}
        >

          <View style={styles.label}>
            <Text>
              from floor:
              {' '}
              {this.props.request.fromFloor}
            </Text>
            <Text>
              to floor:
              {' '}
              {this.props.request.toFloor}
            </Text>
          </View>

        </DropdownMenu>
      </View>
    );
  }
}

Dropdown.propTypes = {
  loadDropdownData: PropTypes.func.isRequired,
  resetComponent: PropTypes.func.isRequired,
};

const containerBgColor = '#fff';
const labelBgColor = '#fff';
const dropDownBgColor = '#090808';
const dropdownTitleColor = '#333333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: containerBgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    backgroundColor: labelBgColor,
    alignItems: 'flex-end',
  },
  dropdown: {
    flex: 1,
    position: 'absolute',
    backgroundColor: dropDownBgColor,
    height: 299,
  },
  dropdownTitle: {
    color: dropdownTitleColor,
  },
});
