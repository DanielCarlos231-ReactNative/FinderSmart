import {StyleSheet} from 'react-native'
import {baseStyles} from '../../styles/baseStyles'


export const styles = StyleSheet.create({
    container: {
        ...baseStyles.containerRow,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 2,
    },
    col:{
        ...baseStyles.container,
        alignItems: 'center',
    },
    textLine:{
        fontSize: 18,
    }
})