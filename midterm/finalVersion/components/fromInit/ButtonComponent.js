import React, { Component } from 'react';
import { Text, View, Button, TextComponent } from 'react-native';
import * as Animatable from 'react-native-animatable';



const AnimatableButton = Animatable.createAnimatableComponent(Button);


export default class BlockComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }
    render() {
        return (
            <View>
                <Animatable.Text
                    animation={{
                        from: {
                            opacity: this.state.pressed ? 1 : 0,


                        },
                        to: {
                            opacity: this.state.pressed ? 0 : 1,
                        },

                    }}>
                    fdfdfd
                </Animatable.Text>
                {
                    this.state.pressed ? '' : <Button title="press" onPress={() => this.setState({
                        pressed: !this.state.pressed
                    })} />
                }


            </View>
        );
    }
}

