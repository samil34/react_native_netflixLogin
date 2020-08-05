import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity 
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{ 
            backgroundColor: 'red', 
            width: '90%', 
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            top: 20,
            borderRadius: 5
          
            }}>
            <Text style={{ 
                color: 'white', 
                fontWeight: 'bold', 
            fontSize: 18}}>{props.text}</Text>
          </TouchableOpacity>
);

export {Button};