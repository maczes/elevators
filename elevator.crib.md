

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
