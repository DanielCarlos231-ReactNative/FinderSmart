import { StyleSheet } from 'react-native'
import {mainTheme, baseStyles} from '../../styles/baseStyles'



//CalculoFii styles
export const styles = StyleSheet.create({
    container: {
        ...baseStyles.container,
        backgroundColor: mainTheme.secondaryColor,
    },
    containerRow: {
        ...baseStyles.containerRow,
        backgroundColor: mainTheme.secondaryColor,
    },
    title: {
        ...baseStyles.title
    },
    btgerlist: {
        backgroundColor: mainTheme.acentColor,
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    commontxt:{
        color: mainTheme.colorText
    }
})