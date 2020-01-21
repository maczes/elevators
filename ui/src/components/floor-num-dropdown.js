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
    let data = this.props.data;

    return (
      <View style={styles.container}>

        <DropdownMenu
          style={styles.dropdown}
          bgColor={'3654356'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          titleStyle={{ color: '#333333' }}
          maxHeight={95}

          handler={(selection, row) => {
            if (selection === 0) {
              this.props.onFromFloorClick1({
                fromFloor: data[selection][row],
                toFloor: this.props.floorTo
              });
            } else if (selection === 1) {
              this.props.onToFloorClick1({
                toFloor: data[selection][row],
                fromFloor: this.props.fromFloor
              });
            }
            else {
              console.error("can't assign selection: ", selection);
            }
          }}

          data={data}
        >

          <View style={styles.label}>
            <Text>from floor: {this.props.request.fromFloor}</Text>
            <Text>to floor: {this.props.request.toFloor}</Text>
          </View>

        </DropdownMenu>
      </View >
    );
  }
}

Dropdown.propTypes = {
  loadDropdownData: PropTypes.func.isRequired,
  resetComponent: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
  },
  dropdown: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#090808',
    height: 299,
  }
});
