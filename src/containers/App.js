/**
 * Created by kei on 13/2/17.
 */
import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

import Home from './Home';
import Counter from './Counter';

const store = createStore(reducer, applyMiddleware(thunk));


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} sceneStyle={styles.routerScene}
                           barButtonIconStyle={styles.barButtonIconStyle}
                           barButtonTextStyle={styles.barButtonTextStyle}
                    >
                        <Scene key="home" component={Home} initial title="Home" sceneStyle={styles.routerScene} />
                        <Scene key="counter" component={Counter} title="Counter" sceneStyle={styles.routerScene}   />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor:'#89cee9',
    },
    navBarTitle:{
        color:'#FFFFFF'
    },
    barButtonTextStyle:{
        color:'#FFFFFF'
    },
    barButtonIconStyle:{
        tintColor:'rgb(255,255,255)'
    },
    routerScene: {
        paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    }
});