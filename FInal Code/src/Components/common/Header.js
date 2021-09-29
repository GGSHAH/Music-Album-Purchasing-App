// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
     backgroundColor: '#01579B',
     justifyContent: 'center',  //'flex-end  etc',position in vertical direcion
     alignItems: 'center',  // move horizontally
     height: 75,
     paddingTop: 15,
     shadowColor: '#000000',
     shadowOffset: { width: 0, height: 20 }, //Tells dimensions of shadow
     shadowOpacity: 0.2,
     elevation: 25, //darkness or heaviness of shadow
     position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    color: '#ffffff'
  }
};

// Make the component available to other parts of the app
export { Header };
