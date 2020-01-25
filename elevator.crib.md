

## Quality
eslint:
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint



## Local development tips
1. access local REST urls
   Use 10.0.2.2 for default AVD and 10.0.3.2 for Genymotion
   more: https://stackoverflow.com/a/55606008


## To use:
1. Redux & Redux-Saga
https://redux-saga.js.org/
2. Typescript object definitions
3. Prop-Types
   Runtime type checking for React props and similar objects.
   https://reactjs.org/docs/typechecking-with-proptypes.html



## JS/REACT/REDUX VOCABULARY
### default export
There are two different types of export, named and default. You can have multiple
named exports per module but only one default export[...]Named exports are useful
to export several values. During the import, it is mandatory to use the same name
of the corresponding object.But a default export can be imported with any name

```js
let myVar; export default myVar = 123;    // in file my-module.js

import myExportedVar from './my-module'   //  we have the freedom to use
// 'import myExportedVar' instead of 'import myVar' because myVar was defined as default export
```

### redux connect
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

The mapStateToProps and mapDispatchToProps deals with your Redux store’s state
and dispatch, respectively. state and dispatch will be supplied to your
mapStateToProps or mapDispatchToProps functions as the first argument.

more: https://react-redux.js.org/api/connect


 <ReactReduxContext.Consumer>
    {({ store }) => {
        console.log("global redux state: ", store.getState());
    }}
</ReactReduxContext.Consumer>


funciton to generate hashcode base on string:
// Convert to 32bit integer
function stringToHash(string) {
  let hash = 0;

  if (string.length === 0) return hash;

  for (let i = 0; i < string.length; i += 1) {
    const char = string.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + char;
    // eslint-disable-next-line no-bitwise
    hash &= hash;
  }

  return hash;
}


// const {
//     direction,
//     addressedFloor,
//     id,
//     busy,
//     currentFloor
// } = result;


   AppConfig = {NUMBER_OF_ELEVATORS:4,
                NUMBER_OF_FLOORS: 6};

   elevators = [
     {id: 0, currentFloor: 0},
     {id: 1, currentFloor: 0},
     {id: 2, currentFloor: 0},
     {id: 3, currentFloor: 0}
   ];

   a = [Array(AppConfig.NUMBER_OF_ELEVATORS).keys()].map(x => {
     const FLOOR_NUMBER_OFFSET = 2; //one row for header, and one for ground floor (level 0)
                   const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + FLOOR_NUMBER_OFFSET;
                   const rows = [];
                   for (let key of x) {
                     let row = Array(FIXED_NUMBER_OF_FLOORS)
                       .fill('E'+(key+1), 0, 1)
                       .fill('', 1,  FIXED_NUMBER_OF_FLOORS)

                     e = elevators.filter(obj => obj.id === key);
                     if (e){
                       e.map(z => {
                         let fromIdx = parseInt(FIXED_NUMBER_OF_FLOORS - (z.currentFloor));
                        let toIdx = parseInt(FIXED_NUMBER_OF_FLOORS - (z.currentFloor+1))
                        console.log("from: %d, to: %d", toIdx, fromIdx)
                         row.fill('x', toIdx, fromIdx);
                       });
                       rows[key] = row ;
                     }
                     else {
                       rows[key] = Array(FIXED_NUMBER_OF_FLOORS)
                         .fill('F'+key, 0, 1)
                         .fill('', 1,  FIXED_NUMBER_OF_FLOORS);
                     }
                   }
                   return rows;
   })[0];


   //console.info(a);

   tableDataArr = a.map(x => {
     console.info(x);
     if (x)
     return x;
   });

   transpose = a => a[0].map((x,i) => a.map(x => x[i]));

   //console.info(transpose(a));



from dropdown:
/*  handler={(selection, row) => {
if (selection === 0) {
  this.props.onFromFloorClick(data[selection][row]);
} else if (selection === 1) {
  this.props.onToFloorClick(data[selection][row]);
}
else {
  console.error("can't assign selection: ", selection);
}
}} */

// handler={(selection, row) => this.setState(() => {
//   if (selection === 0) {
//     return Object.assign({}, this.state, {
//       from: data[selection][row],
//       to: this.state.to,
//     });
//   } else if (selection === 1) {
//     return Object.assign({}, this.state, {
//       from: this.state.from,
//       to: data[selection][row],
//     });
//   } else {
//     console.error("can't assign selection: ", selection);
//   }
// }
//)}

code clean up:

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
