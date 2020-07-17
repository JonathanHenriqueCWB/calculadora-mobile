import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

export default props =>{

    /*
        Cria um array com os estilo button e adiciona outros conforme
        a chamada dos componentes
    */
    const stylesButton = [estilo.button]
    if(props.double) stylesButton.push(estilo.buttonDouble)
    if(props.triple) stylesButton.push(estilo.buttonTriple)
    if(props.operation) stylesButton.push(estilo.operationButton)

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.nomeBtn}</Text>
        </TouchableHighlight>
    )
}



const estilo = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: "#fa8231",
    },
    buttonDouble: {
        width: (Dimensions.get('window').width /4) *2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})