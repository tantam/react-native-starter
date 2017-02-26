import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Style from '../styles'

import { Icon, Button } from 'react-native-elements'

class Counter extends Component {
    constructor(props){
        super(props);
    }

    render() {

        console.log(this);
        return (
            <View style={{flex:1,flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.counterText}>{this.props.number}</Text>
                <View style={{flexDirection:'row'}}>
                    <Icon
                        raised
                        name='plus'
                        type='font-awesome'
                        onPress={() =>{
                            this.props.counterIncease(this.props.number)
                        }} />
                    <Icon
                        raised
                        name='minus'
                        type='font-awesome'
                        onPress={() =>{
                            this.props.counterDecease(this.props.number)
                        }} />
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    counterText : {
        fontSize:150,
        paddingLeft:10,
        paddingRight:10
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        number:state.counter.number
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
