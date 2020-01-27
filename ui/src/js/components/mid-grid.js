/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View, StyleSheet, Button, Text, TouchableOpacity, Image,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import FloorNumDropdownContainer from '../containers/floor-num-dropdown-container';

const goBackIcon = require('../../assets/icon-back.png');

export default class MidGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  onGoButtonClickListener = (props, modalCallbackAction) => {
    const {
      onGoButtonClick,
      fromFloor,
      toFloor,
    } = props;

    console.log(`requesting elevator to the floor no: ${fromFloor}, target floor: ${toFloor}`);

    modalCallbackAction();
    onGoButtonClick(fromFloor, toFloor);
  }

  toggleModal = () => {
    this.setState((prevState) => ({ isModalVisible: !prevState.isModalVisible }));
  };

  render() {
    const { isModalVisible } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Pick up start and target floor by
          clicking Request Elevator
        </Text>
        <Button title="Request Elevator" onPress={this.toggleModal} />
        <Modal isVisible={isModalVisible} onRequestClose={this.toggleModal}>
          <TouchableOpacity onPress={this.toggleModal}>
            <Image
              style={styles.modalBackIcon}
              source={goBackIcon}
            />
          </TouchableOpacity>
          <View style={styles.dropdownContainer}>
            <FloorNumDropdownContainer />
            <Button title="Go" style={styles.btn} onPress={() => this.onGoButtonClickListener(this.props, this.toggleModal)} />
          </View>
        </Modal>
      </View>
    );
  }
}

MidGrid.propTypes = {
  fromFloor: PropTypes.number.isRequired,
  toFloor: PropTypes.number.isRequired,
  onGoButtonClick: PropTypes.func.isRequired,
};

const containerBgColor = 'white';
const styles = StyleSheet.create({
  container: { flex: 1 },
  dropdownContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: containerBgColor,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    maxHeight: '20%',
  },
  btn: {
    textAlign: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  label: {
    alignItems: 'center',
    textAlign: 'center',
  },
  modalBackIcon: {
    height: 20,
    width: 20,
  },

});
