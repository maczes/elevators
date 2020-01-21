

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
