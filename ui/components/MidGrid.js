import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Dropdown3 from '../components/Dropdown3';
import ActionButton from '../components/ActionButton';
import Modal from "react-native-modal";

export default class MidGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false
        };
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button title="Request Elevator" onPress={this.toggleModal} />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={stylesMidGrid.container}>
                        <Dropdown3 caption="from floor:" />
                        <Dropdown3 caption="to floor:" />
                        <Button title="Go" style={stylesMidGrid.btn} onPress={this.toggleModal} />
                    </View>
                </Modal>
            </View>
        );
    }
}

const stylesMidGrid = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        maxHeight: '20%'
    },
    btn: {
        textAlign: 'center',
        justifyContent: 'space-around', alignContent: 'center'
    },
});
