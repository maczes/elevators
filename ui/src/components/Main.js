import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElevatorGrid from './ElevatorGrid';
import MidGrid from './MidGrid';
import InfoGrid from './InfoGrid';
import FetchExample from './anteroom/FetchExample';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
           
        }
    }

    render() {

        return (
            <View style={styles.top_container}>

                <View style={styles.grid_container}>
                    <Text>Elevator Simulator</Text>
                    <Text>-------------------------</Text>
                    <ElevatorGrid />
                </View >

                <View style={stylesMidGrid.container}>
                    <MidGrid />
                </View>

                <View style={stylesDashboard.container}>
                    <InfoGrid />
                </View>

                {/* <FetchExample requestUrl={this.state.appCfg.BE_URL + '/list'} /> */}

            </View>
        );
    }
}

const stylesDashboard = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});

const stylesMidGrid = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '10%',
        maxHeight: '10%',
    }
});

const styles = StyleSheet.create({
    top_container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#daed09',
    },
    grid_container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        minHeight: '10%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    label: {
        backgroundColor: '#fffddd',
        alignItems: 'center',
        height: '3%',
    }

});


/**
 * colors:
 * red: '#ff4534',
 */
