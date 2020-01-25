/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View, StyleSheet, Button, Text, TouchableOpacity, Image,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import FloorNumDropdownContainer from '../containers/floor-num-dropdown-container';

export default class MidGrid extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isModalVisible: false,
  //   };
  // }

  onGoButtonClickListener = (props) => {
    const {
      onGoButtonClick,
      fromFloor,
      toFloor,
    } = props;
    console.log('requesting elevator to the floor no: ', fromFloor);

    // onToogleModal();
    onGoButtonClick(fromFloor, toFloor);
  }

  // onGoButtonClicked = () => {
  //   this.toggleModal();
  //   console.log('requesting elevator to the floor no: ', this.props.fromFloor);
  //   this.props.onGoButtonClick(this.props.fromFloor, this.props.toFloor);
  // }

  // toggleModal = () => {
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  // };


  render() {
    const { isModalVisible, onRequestElevatorButtonClick, onToogleModal } = this.props;

    return (
      <View style={stylesMidGrid.container}>
        <Text style={stylesMidGrid.label}>
          Pick up start and target floor by clicking Request Elevator
        </Text>
        <Button title="Request Elevator" onPress={onRequestElevatorButtonClick} />
        <Modal isVisible={isModalVisible} onRequestClose={onToogleModal}>
          <TouchableOpacity onPress={onToogleModal}>
            <Image
              style={stylesMidGrid.modalBackIcon}
              source={require('../assets/icon-back.png')}
            />
          </TouchableOpacity>
          <View style={stylesMidGrid.dropdown}>
            <FloorNumDropdownContainer />
            <Button title="Go" style={stylesMidGrid.btn} onPress={this.onGoButtonClickListener(this.props)} />
          </View>
        </Modal>
      </View>
    );
  }
}

MidGrid.propTypes = {
  // fromFloor: PropTypes.number.isRequired,
  // onGoButtonClick: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  onRequestElevatorButtonClick: PropTypes.func.isRequired,
  onToogleModal: PropTypes.func.isRequired,
};

const bgColor = 'white';
const stylesMidGrid = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: bgColor,
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
