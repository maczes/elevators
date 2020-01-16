import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell } from 'react-native-table-component';

class ElevatorGrid2 extends Component {
    constructor(props) {
        super(props);

        
        const elementButton = (value) => (
            <View style={styles.btn}>
                <Text style={styles.headerText}>{value}</Text>
            </View>
        );

        this.state = {
            rowTitle: ['0', '1', '2', '3', '4', '5', '6'].reverse(),
            tableData: [
                [elementButton('E1'), "", "", "", "x", "", "", ""],
                [elementButton('E2'), "", "", "", "", "", "x", ""],
                [elementButton('E3'), "", "", "x", "", "", "", ""],
                [elementButton('E4'), "", "x", "", "", "", "", ""],
                [elementButton('E5'), "", "", "", "y", "", "", ""]
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 1 }}>
                    {/* Left Wrapper */}
                    <TableWrapper style={{ width: 60 }}>
                        <Cell data="" style={styles.singleHead} />
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Col data={['F']} style={styles.head} textStyle={styles.text} />
                            <Col data={state.rowTitle} style={styles.title} heightArr={[30, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.titleText}></Col>
                        </TableWrapper>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <TableWrapper style={{ flex: 1, width: 400 }}>
                        <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 2, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    singleHead: { width: 60, height: 40, backgroundColor: '#c8e1ff' },
    head: { flex: 1, backgroundColor: '#c8e1ff' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },     //@ elevators IDs cell style; flex: 1 - this is cell division ratio  
    titleText: { marginRight: 0, textAlign: 'center' }, //@ elevators IDs cell text style;
    text: { textAlign: 'center' },
    btn: { flex:1, backgroundColor: '#c8e1ff', textAlign: 'center', paddingTop: 10 },
    headerText: { textAlign: 'center' }
});

export default ElevatorGrid2 //exporting a component make it reusable and this is the beauty of react
