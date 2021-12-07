import { StyleSheet } from 'react-native'
import {mainTheme} from '../../styles/baseStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 0,
        maxWidth: '100%',
        alignItems: 'center',
        marginVertical: '3%',
        marginHorizontal: '1%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 2,
        paddingHorizontal: 5,
        borderColor: mainTheme.acentColor
    },
    info:{
        color: mainTheme.acentColor
    },
    line: {
        flex: 0,
        flexDirection: 'row',
        

    },
    input: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#EEE',
        borderRadius: 10,
        color: '#000',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 3,
    },
    foco:{
        borderColor: '#FF27E8'
    },
    borderFont:{
        borderColor: '#FF27E8'
    }
})