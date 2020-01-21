import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import DropdownMenu from 'react-native-dropdown-menu';

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    props.loadDropdownData();

    this.state = {
      from: '',
      to: '',
    };
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
              this.props.onFromFloorClick(data[selection][row]);
            } else if (selection === 1) {
              this.props.onToFloorClick(data[selection][row]);
            }
            else {
              console.error("can't assign selection: ", selection);
            }
          }}

          // handler={(selection, row) => this.setState(() => {
          //   if (selection === 0) {
          //     return Object.assign({}, this.state, {
          //       from: data[selection][row],
          //       to: this.state.to,
          //     });
          //   } else if (selection === 1) {
          //     return Object.assign({}, this.state, {
          //       from: this.state.from,
          //       to: data[selection][row],
          //     });
          //   } else {
          //     console.error("can't assign selection: ", selection);
          //   }
          // }
          //)}

          data={data}
        >

          <View style={styles.label}>
            <Text>
              {/* from floor: {this.state.from} */}
              from floor: {this.props.floorFrom}
            </Text>
            <Text>
              to floor: {this.props.floorTo}
            </Text>
          </View>

        </DropdownMenu>
      </View >
    );
  }
}

Dropdown.propTypes = {
  //caption: PropTypes.string.isRequired,
  onFromFloorClick: PropTypes.func.isRequired,
  onToFloorClick: PropTypes.func.isRequired,
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
