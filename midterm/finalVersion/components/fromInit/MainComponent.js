import React, { Component } from 'react';
import { View, Button } from 'react-native';
import StartRainComponet from './StartRainComponent';
import ImageComponent from './ImageComponet';
import CounterComponet from './CounterComponent';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }
    render() {
        let ispressed = this.state.pressed

        return (
            <View>
                <StartRainComponet />
                {
                    ispressed ?
                        <View>
                            <CounterComponet />
                            <ImageComponent />
                        </View>
                        : ''
                }
                {
                    ispressed ? '' : <Button title='Start' onPress={() => {
                        this.setState({
                            pressed: !this.state.pressed
                        })
                    }} />
                }


            </View>
        );
    }
}

export default MainComponent;
