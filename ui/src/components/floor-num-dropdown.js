import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import DropdownMenu from 'react-native-dropdown-menu';

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.caption);
    this.state = {
      text: ''
    };
  }

  render() {
    // var data = [["0", "1", "2", "3", "4", "5", "6"], ["0", "1", "2", "3", "4", "5", "6"]];
    var data = [["0", "1", "2", "3", "4", "5"]];

    return (
      <View style={styles.container}>

        <DropdownMenu
          style={styles.dropdown}
          bgColor={'3654356'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          //optionTextStyle={{ color: '#333333' }}
          titleStyle={{ color: '#333333' }}
          maxHeight={95}

          handler={(selection, row) => this.setState({ text: data[selection][row] })}
          data={data}
        >

          <View style={styles.label}>
            <Text>
              {this.props.caption}: {this.state.text}
            </Text>
          </View>

        </DropdownMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  dropdown: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#090808',
    //height: 299,
  }
});
