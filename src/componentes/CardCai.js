import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardCai = ({ CAI, FechaLimite, NumeroInicial, NumeroFinal, creado,  activo }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{CAI}</Text>
                <Text>{FechaLimite}</Text>
                <Text>{NumeroInicial}</Text>
                <Text>{NumeroFinal}</Text>
                <Text>{creado}</Text>
                <Text>{activo}</Text>
            </View>
        </View>
    );
}

export default CardCai;

const styles = StyleSheet.create({

    contenedor: {
        borderWidth: 1,
        borderColor: "#dedede",
        backgroundColor: "#fff",
        padding: 10,
        flexDirection: "column",
        marginBottom:10,
    },
    contenedorTexto: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
    },
    imagen: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 45,
    },
    texto: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
    }
});