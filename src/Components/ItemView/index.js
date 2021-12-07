import React from 'react'
import {View, Text} from 'react-native'
import {styles} from './style'


export default function({data}){

    const {mes, aporte, vlrAtual, rendimento, cotas} = data

    //console.log(mes, aporte, valorAtual, rendimento, cota)
    //console.log(data.data)

    return(
        <View style={styles.container}>
            <View style={styles.col}>
                <Text style={styles.textLine}>Valor atual: {vlrAtual}</Text>
                <Text style={styles.textLine}>Rendimento: {rendimento}</Text>
            </View>
            <View style={styles.col}>
                <Text style={styles.textLine}>Mes: {mes}</Text>
                <Text style={styles.textLine}>Cotas: {cotas}</Text>
            </View>
        </View>
    )
}