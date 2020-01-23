import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell } from 'react-native-table-component';
import PropTypes from 'prop-types';


export default class ElevatorGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        }

        props.onElevatorGridLoad();
        //this.loadData();
    }

    loadData() {
        try {
            this.props.onElevatorGridLoad();
            console.log("listing elevators ", this.props.elevators);

            const newState = Object.assign({}, this.state, {
                isLoading: false,
            });

            this.setState(newState);
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {

        if (this.props.isLoading) {
            console.info('loading activity indicator');
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 1 }}>
                    {/* Left Wrapper */}
                    <TableWrapper style={styles.wrapperLeft}>
                        <Cell data="" style={styles.singleHead} />
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Col data={['F']} style={styles.head} textStyle={styles.text} />
                            <Col data={this.props.rowTitle}
                                style={styles.title}
                                heightArr={[30, 30, 30, 30, 30, 30, 30, 30]}
                                textStyle={styles.titleText}></Col>
                        </TableWrapper>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <TableWrapper style={styles.wrapperRight}>
                        <Cols data={this.props.tableData}
                            heightArr={[40, 30, 30, 30, 30, 30, 30, 30]}
                            style={styles.title}
                            textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        )
    }
}

ElevatorGrid.propTypes = {
    tableData: PropTypes.array.isRequired,
    onElevatorGridLoad: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        paddingTop: 20,
        //backgroundColor: '#fffddd',
        width: '80%',
        height: '20%'
    },
    singleHead: { width: 60, height: 40, backgroundColor: '#c8e1ff' },
    head: { flex: 1, backgroundColor: '#c8e1ff' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },     //@ elevators IDs cell style; flex: 1 - this is cell division ratio  
    titleText: { marginRight: 0, textAlign: 'center' }, //@ elevators IDs cell text style;
    text: { textAlign: 'center' },
    colHeader: { flex: 1, backgroundColor: '#c8e1ff', textAlign: 'center', paddingTop: 10 },
    rowHeader: { flex: 1, backgroundColor: '#b4e8d7' },
    elevatorCell: { flex: 1, backgroundColor: '#ffcccc', textAlign: 'center' },
    headerText: { textAlign: 'center' },
    wrapperLeft: { width: 60 },
    wrapperRight: { flex: 1, flexDirection: 'column' }
});
