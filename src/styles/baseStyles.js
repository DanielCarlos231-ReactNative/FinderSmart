import React from 'react';
import {StyleSheet} from 'react-native'

const themes = {
    light: {
        primaryColor: '#E09788',
        secondaryColor: '#A87978',
        acentColor: '#000',
        colorText: 'black',
    },
    dark: {
        primaryColor: '#1169A8',
        secondaryColor: '#4C6475',
        acentColor: '#000',
        colorText: 'white',
    },
    background: 'white'
}

export const mainTheme = {
    ...themes.dark
}

export const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: themes.background,
        width: '100%',
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: themes.background,
    },
    title: {
        color: mainTheme.colorText,
        marginTop: 5,
        padding: 5,
        textAlign: 'center',
        fontSize: 24,
    }
    
})