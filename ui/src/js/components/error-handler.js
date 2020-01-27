/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const ErrorHandler = (props) => {
  const { errMessage } = props;

  if (errMessage) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{errMessage}</Text>
      </View>
    );
  }

  return (<View style={styles.container}><Text /></View>);
};

ErrorHandler.propTypes = {
  errMessage: PropTypes.string.isRequired,
};

const textColor = '#f44336';

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  text: {
    color: textColor,
  },
});

export default ErrorHandler;
