/* eslint-disable no-use-before-define */
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';


export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true }); // Display fallback UI

    logError(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Text>omething went wrong.</Text>;
    }
    return children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const logError = (error, info) => {
  console.error('application error catched: ', error, info);
};
