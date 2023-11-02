import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import { Dimensions } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        // height: '100%',
        // width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1
    },
    headerText: {
        height: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }
})

export default Header