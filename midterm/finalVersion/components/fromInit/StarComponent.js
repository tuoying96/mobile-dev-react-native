import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';



export default class StartComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <Animatable.Text
                duration ={this.props.duration}
                iterationCount="infinite"
                    animation={{
                        from: {
                            opacity: 1,
                            color: 'white',
                            fontSize: 50,
                            translateX: this.props.fx,
                            translateY: -400,

                        },
                        to: {
                            opacity: 0.4,
                            color: 'white',
                            fontSize: 50,
                            translateX: this.props.tx,
                            translateY: 100,
                        },
  
                    }}>
                    .
                </Animatable.Text>  
            </View>
        );
    }
}

