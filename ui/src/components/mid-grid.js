import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Dropdown from './floor-num-dropdown';
import Modal from "react-native-modal";

export default class MidGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false
        };
    }

    onGoButtonClicked = () => {
        this.toggleModal();

        // const { userId, dispatch } = this.props
        // dispatch({ type: 'USER_FETCH_REQUESTED', payload: { userId } })
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={stylesMidGrid.label}>Pick up start and target floor by clicking "Request Elevator"</Text>
                <Button title="Request Elevator" onPress={this.onGoButtonClicked} />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={stylesMidGrid.container}>
                        <Dropdown caption="from floor:" />
                        <Dropdown caption="to floor:" />
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
    label: {
        alignItems: 'center',
        textAlign: 'center',
    }
});
