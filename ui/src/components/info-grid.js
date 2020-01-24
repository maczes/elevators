import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

export default class InfoGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text>System Activity Monitoring Dashboard</Text>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.text}>
                            {this.props.noticeBoard}
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

InfoGrid.propTypes = {
    noticeBoard: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 0,
    },
    text: {
        flex: 1,
        fontSize: 12,
    },
});

