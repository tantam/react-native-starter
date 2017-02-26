/**
 * Created by kei on 13/2/17.
 */
import { StyleSheet, Dimensions,Navigator } from 'react-native';

let {height, width} = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        marginTop:20
    }
});

export default Styles;
