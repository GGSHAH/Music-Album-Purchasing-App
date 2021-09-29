import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
  <View style={styles.containerStyle}>
  <Text style={styles.labelStyle}>{label}</Text>
  <TextInput
  secureTextEntry={secureTextEntry}
  placeholder={placeholder}
  autoCorrect={false}
  style={styles.inputSyle}
  value={value}
  onChangeText={onChangeText}
  />
  </View>
  );
};

const styles = StyleSheet.create({
  inputSyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row', //make item lineup in row direction
    alignItems: 'center'
  }
});

export { Input };
