import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import StartComponet from './StarComponent';


export default class StartRainComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <StartComponet fx={-300} tx={200} duration = {1000}/>
                <StartComponet fx={-500} tx={300} duration = {800}/>
            </View>
        );
    }
}

