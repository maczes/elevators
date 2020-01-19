import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

class ActionButton extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _alertIndex(value) {
        Alert.alert(`This is column ${value}`);
        console.log('ActionButton pressed');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._alertIndex("value")}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Go</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 1, paddingTop: 1, backgroundColor: '#fff', justifyContent: 'flex-end',
        alignContent: 'center'
    },
    btn: {
        width: 58, height: '90%', marginLeft: 15,
        backgroundColor: '#c8e1ff', borderRadius: 2, textAlign: 'center',
        justifyContent: 'space-around', alignContent: 'center'
    },
    btnText: { textAlign: 'center', justifyContent: 'space-around', alignContent: 'center' }
});

export default ActionButton