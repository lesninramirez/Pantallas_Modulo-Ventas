import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardEstaciones = ({ id_venta, idpos, referencia, numerotarjeta, valor, nombrepropietario, idmarca }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{id_venta}</Text>
                <Text>{idpos}</Text>
                <Text>{referencia}</Text>
                <Text>{numerotarjeta}</Text>
                <Text>{valor}</Text>
                <Text>{nombrepropietario}</Text>
                <Text>{idmarca}</Text>
            </View>
        </View>
    );
}

export default CardEstaciones;

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