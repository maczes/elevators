import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.requestUrl = props.requestUrl;
        this.state = {
            isLoading: true,
        }
    }

    async componentDidMount() {
        try {
            console.log("listing elevators with " + this.requestUrl);

            const response = await fetch(this.requestUrl);
            const responseJson = await response.json();

            const elevatorsState = responseJson.map(c => {
                return {
                    id: c.id,
                    currentFloor: c.currentFloor
                };
            });

            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
                isLoading: false,
                dataSource: elevatorsState
            });

            this.setState(newState, function () {});
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>Elevator {item.id} is on {item.currentFloor} floor</Text>}
                    keyExtractor={(id, index) => index.toString()}
                />
            </View>
        );
    }
}
