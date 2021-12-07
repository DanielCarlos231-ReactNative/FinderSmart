import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import InputValue from '../../Components/InpTxtValue/InpTxtValue'
import ItemView from '../../Components/ItemView/index'
import {styles} from './style'


export default function(){

    const [dados, setDados] = useState({
        aporte: '',
        vlrFundo: '',
        yeld: '',
        rendimento: '',
        meses: '',
        ano: '',
    })

    const [magicNumber, setMagicNumber] = useState(0)
    const [list, setList] = useState([{
        mes: 0,
        aporte: 0,
        vlrAtual: 0,
        rendimento: 0,
        cotas: 0
    }])

    
    
    
    const rendFundYeld = (fundo, yeld) => {
        if(fundo != 0 && fundo != ''){
            if(yeld != 0 && yeld != ''){
                return Math.round(fundo * yeld) / 100
            }
        }
        return 0
    }
    
    const rendimento = (fundo, cotas, yeld) => {
        if(fundo != 0 && fundo != ''){
            if(yeld != 0 && yeld != ''){
                return (((fundo*cotas)*yeld)/100).toFixed(2)
            }
        }
        return 0
    }
    
    const cotasTotal = (vlrAtual, fundo) => {
        if(vlrAtual != 0 && vlrAtual != ''){
            if(fundo != 0 && fundo != ''){
                return  (vlrAtual / fundo).toFixed(0)
            }
        }
        return 0
    }
    
    const calculateMagicNumber = (fundo, yeld) => {
        if(fundo != 0 && fundo != ''){
            if(yeld != 0 && yeld != ''){
                return fundo / rendFundYeld(fundo, yeld)
            }
        }
        return null
    }

    // const [list, setList] = useState([{
    //     ano: 0,
    //     mes: 0,
    //     aporte: 0,
    //     valorAtual: 0,
    //     rendimento: 0,
    //     cotas: 0,
    // }])

    const aporteQtdCotas = (aporte, fundo) => {
        if(aporte != 0 && aporte != ''){
            if(fundo != 0 && fundo != ''){
                //console.log(Math.round(parseInt(aporte) / parseFloat(fundo))*parseFloat(fundo))
                return (Math.round(parseInt(aporte) / parseFloat(fundo))*parseFloat(fundo)).toFixed(2)
            }
        }
        return null
    }
   

    const createArray = (data) => {

        let valorAtual = 0//data.vlrFundo
        let rend = 0//data.rendimento
        let aporte = aporteQtdCotas(data.aporte, data.vlrFundo)
        let cotas = 1
        let meses = 1

        if(dados.meses > 0){
            return new Array(parseInt(dados.meses))
            .fill({})
            .map((obj) => {
                obj = {
                    mes: parseInt(meses),
                    aporte: parseFloat(aporte),
                    vlrAtual: parseFloat(valorAtual).toFixed(2),
                    rendimento: parseFloat(rend),
                    cotas: parseFloat(cotas).toFixed(0)
                }

                meses += 1
                valorAtual = parseFloat(valorAtual) + parseFloat(aporte) + parseFloat(rendFundYeld(valorAtual, data.yeld))
                cotas = cotasTotal(valorAtual, data.vlrFundo)
                rend = parseFloat(rendimento(data.vlrFundo, cotas,data.yeld))



                return obj
            })
        }else{
            return new Array(1).fill(0)
        }

        
    }
    
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Estimativa de progressão</Text>
            <View style={styles.containerRow}>
                <InputValue style={{flex:1}} value={dados.aporte} onChangeText={(txt) => {
                    setDados((prev) => ({...prev, aporte: txt}))
                }} info="Aporte Medio" />
                <InputValue value={dados.vlrFundo} onChangeText={(txt) => {
                    setDados((prev) => ({...prev, vlrFundo: txt}))
                }} style={{flex:1}} info="Valor do fundo" />
            </View>
            <View style={styles.containerRow}>
                <InputValue value={dados.yeld} onChangeText={(txt) => {
                    setDados((prev) => ({...prev, yeld: txt}))
                }} style={{flex:1}} info="Yeld" />
                <InputValue value={dados.meses} onChangeText={(txt) => {
                    setDados((prev) => ({...prev, meses: txt}))
                }} style={{flex:1}} info="Meses" />
            </View>
            <View style={styles.containerRow}>
                {/* <InputValue value={dados.rendimento} onChangeText={(txt) => {
                    setDados((prev) => ({...prev, rendimento: txt}))
                }} style={{flex:1}} info="Rendimento" /> */}
                {/* <InputValue style={{flex:1}} info="Ano" /> */}
            </View>
            <TouchableOpacity onPress={() => {
                setList(createArray(dados))
            }} style={styles.btgerlist} activeOpacity={0.7} >
                <Text style={styles.commontxt}>Gerar estimativa</Text>
            </TouchableOpacity>
            <View>
                <FlatList 
                    keyExtractor={() => Math.random().toString()}
                    data={list}
                    renderItem={({item}) => (<ItemView data={item} />) }
                />
            </View>
        </ScrollView>
    )
}