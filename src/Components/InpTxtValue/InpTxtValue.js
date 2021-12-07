import React, { useState, Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {TextInputMask} from 'react-native-masked-text'
import {styles} from './styles'


export default ({
        info, 
        mask, 
        onChangeText, 
        secureTextEntry,
        style = null, 
        flex = 0, 
        value = '', 
        keyType='default',
        autoCapitalize='none',
        // autoCorrect={false}
        // autoCompleteType='email'

    }) => {

    const estilo = [styles.container]

    if(style){
        estilo.push(style)
    }

    const [valueText, setValueText] = useState([{
        texto: null
    }])

    const [styleFoco, setStyleFoco] = useState({})

    const placeholder = "".concat(info || '')

    // const handleChangeText = (text) => setValueText((prevSte) => ({...prevSte, texto: text}))

    // setState(prevState => ({...prevState, [name]: value}));
    const emFoco = () => {

    }

    return (
        <View style={estilo} >
            <Text style={styles.info} >{info}</Text>
            <View style={styles.line} >

            {
                mask ?  
                <TextInputMask 
                    type={'custom'}
                    options={{
                        mask: mask
                        // mask: 'SS:SS:SS:SS:SS:SS'
                    }}
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize}
                    placeholder={placeholder}
                    keyboardType={keyType}
                    value={value || valueText.texto}
                /> : 

                <TextInput
                    style={[styles.input, styleFoco]}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    keyboardType={keyType}
                    value={value || valueText.texto}
                    autoCapitalize={autoCapitalize}
                    // autoCorrect={false}
                    // autoCompleteType=''
                    // onFocus={styles.foco}
                />


            }


               
                
            </View>
        </View>
    )
}

