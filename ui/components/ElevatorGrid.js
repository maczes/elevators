import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ElevatorGrid extends Component {
    constructor(props) {
        super(props)      //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = {    //state is by default an object
            elevators: [
                { id: 1, direction: 'NONE', addressedFloor: 0, busy: false, currentFloor: 0 },
                { id: 2, direction: 'NONE', addressedFloor: 0, busy: false, currentFloor: 0 },
                { id: 3, direction: 'NONE', addressedFloor: 0, busy: false, currentFloor: 0 },
                { id: 4, direction: 'NONE', addressedFloor: 0, busy: false, currentFloor: 0 },
            ],
            floors: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
                { id: 7 }
            ],
            gridData: [
                { fid: 3, E1: "", E2: "x", E3: "", E4: "" },
                { fid: 2, E1: "", E2: "", E3: "x", E4: "" },
                { fid: 1, E1: "", E2: "", E3: "", E4: "x" },
                { fid: 0, E1: "x", E2: "", E3: "", E4: "" }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.gridData[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.gridData.map((row, index) => {
            const { fid, E1, E2, E3, E4 } = row //destructuring
            return (
                <tr key={fid}>
                    <td><Text>{fid}</Text></td>
                    <td><Text>{E1}</Text></td>
                    <td><Text>{E2}</Text></td>
                    <td><Text>{E3}</Text></td>
                    <td><Text>{E4}</Text></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table id='elevators'>
                    <thead>
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ElevatorGrid //exporting a component make it reusable and this is the beauty of react
