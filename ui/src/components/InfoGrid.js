import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

class InfoGrid extends Component {

    constructor(props) {
        super(props);
        console.log(props.caption);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View>
                <SafeAreaView style={styles.container}>
                    <Text>System Activity Monitoring Dashboard</Text>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 0,
    },
    text: {
        fontSize: 12,
    },
});


export default InfoGrid
