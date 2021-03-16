import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';


class BounceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <Animatable.Text
                iterationCount="infinite"
                easing="linear"
                animation={{
                    0: {
                        fontSize: 20,
                        rotate: "-40deg"
                    },
                    0.5: {
                        fontSize: 60,
                        rotate: "10deg"

                    },
                    1: {
                        fontSize: 20,
                        rotate: "-40deg"

                    }
                }}
                >❤️</Animatable.Text>
            </View>
        );
    }
}

export default BounceComponent;
