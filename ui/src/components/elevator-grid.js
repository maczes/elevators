import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell } from 'react-native-table-component';
import ApiClient from '../services/api-client';
import AppConfig from '../config/app-config';


export default class ElevatorGrid extends React.Component {

    constructor(props) {
        super(props);

        const elevatorMark = "|";

        this.colHeaderDecorator = (value) => (
            <View style={styles.colHeader}>
                <Text style={styles.headerText}>{value}</Text>
            </View>
        );

        this.floorNumberDecorator = (value) => (
            <View style={styles.rowHeader}>
                <Text style={styles.headerText}>{value}</Text>
            </View>
        );

        this.elevatorCellDecorator = (value) => (
            <View style={styles.elevatorCell}>
                <Text style={styles.headerText}>{value}</Text>
            </View>
        );

        this.apiClient = ApiClient.create();

        this.state = {
            isLoading: true,
        }
    }

    async loadData() {
        try {
            console.log("listing elevators ");

            const response = await this.apiClient.getElevators();

            const elevators = response.data.map(c => {
                return {
                    id: c.id,
                    currentFloor: c.currentFloor
                };
            });

            const rowTitleArr = [];

            for (i = 0; i <= AppConfig.NUMBER_OF_FLOORS; i++) {
                rowTitleArr[i] = this.floorNumberDecorator(i.toString());
            }

            let tableDataArr = [Array(AppConfig.NUMBER_OF_ELEVATORS).keys()].map(x => {
                const FLOOR_NUMBER_OFFSET = 2; //one row for header, and one for ground floor (level 0)
                const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + FLOOR_NUMBER_OFFSET;
                const rows = [];
                for (let key of x) {
                    let row = Array(FIXED_NUMBER_OF_FLOORS)
                        .fill(this.colHeaderDecorator('E' + (key + 1)), 0, 1)
                        .fill('', 1, FIXED_NUMBER_OF_FLOORS);

                    e = elevators.filter(obj => obj.id === key);
                    if (e) {
                        e.map(z => {
                            let toIdx = parseInt(FIXED_NUMBER_OF_FLOORS - (z.currentFloor));
                            let fromIdx = parseInt(FIXED_NUMBER_OF_FLOORS - (z.currentFloor + 1));
                            row.fill(this.elevatorCellDecorator(this.elevatorMark), fromIdx, toIdx);
                        });
                        rows[key] = row;
                    }
                    else {
                        rows[key] = Array(FIXED_NUMBER_OF_FLOORS)
                            .fill('F' + key, 0, 1)
                            .fill('', 1, FIXED_NUMBER_OF_FLOORS);
                    }
                }
                return rows;
            })[0];

            console.info("elevator table: " + tableDataArr);
            // create a new "State" object without mutating the original State object. 
            const newState = Object.assign({}, this.state, {
                isLoading: false,
                dataSource: elevators,
                rowTitle: rowTitleArr.reverse(),
                tableData: tableDataArr,
                //note: one tableData row is in fact column in app
            });

            this.setState(newState, function () { });
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {

        if (this.state.isLoading) {
            this.loadData();
            console.info('reloading activity indicator');
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
                            <Col data={this.state.rowTitle}
                                style={styles.title}
                                heightArr={[30, 30, 30, 30, 30, 30, 30, 30]}
                                textStyle={styles.titleText}></Col>
                        </TableWrapper>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <TableWrapper style={styles.wrapperRight}>
                        <Cols data={this.state.tableData}
                            heightArr={[40, 30, 30, 30, 30, 30, 30, 30]}
                            style={styles.title}
                            textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        )
    }
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


/**
 * colors:
 * red: '#ff4534',
 */


/*
async fetchElevators() {
    try {
        let requestUrl = "http://10.0.2.2:8080/elevator/api/v1/list";
        console.log("listing elevators with " + requestUrl);

        const response = await fetch(requestUrl);
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
            dataSource: elevatorsState,
            rowTitle: ['0', '1', '2', '3', '4', '5', '6'].reverse(),
            tableData: [
                [this.colHeader('E1'), '', 'x', '', '', '', '', ''],
                [this.colHeader('E2'), '', '', '', '', '', 'x', ''],
                [this.colHeader('E3'), '', '', 'x', '', '', '', ''],
                [this.colHeader('E4'), '', '', '', '', '', '', 'x'],
                [this.colHeader('E5'), '', '', '', '', 'x', '', ''],
                [this.colHeader('E6'), '', '', '', '', 'x', '', '']
            ], //note: one tableData row is in fact column in app
        });

        this.setState(newState, function () { });
    }
    catch (error) {
        console.error(error);
    }
} */