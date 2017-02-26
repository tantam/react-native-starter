import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {List, ListItem} from 'react-native-elements'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Styles from '../styles'


const SceneList = [
    {
        title: 'Counter',
        onPress: () => {
            Actions.counter();
        }
    }
];

class Home extends Component {
    constructor(props) {
        super(props);
    }

    renderListItem(rowItem) {

        return (
            <TouchableOpacity
                onPress={rowItem.onPress}
            >
                <Text>{rowItem.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <List>
                {
                    SceneList.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            onPress={item.onPress}
                        />
                    ))
                }
            </List>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
