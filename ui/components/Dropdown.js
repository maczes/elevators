import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
class FloorDropdown extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
 
    return (
      <Dropdown
        label='Favorite Fruit'
        data={data} 
      />
    );
  }
}

export default FloorDropdown 
