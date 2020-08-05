import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            width: width * 0.9,
            height: height * 0.07,
            backgroundColor: '#4c4c4c',
            borderWidth: 0.5,
            borderColor: 'gray',
            borderRadius: 5,
            paddingLeft: 10,
            padding: 10,
            marginBottom: height * 0.02,
            fontSize: 18
        }, props.style]}
    />
);

export {Input};