import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardClientes = ({ RTN, Nombre, Direccion, Telefono, Correo, Imagen, nombreImagen }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{RTN}</Text>
                <Text>{Nombre}</Text>
                <Text>{Direccion}</Text>
                <Text>{Telefono}</Text>
                <Text>{Correo}</Text>
                <Text>{Imagen}</Text>
                <Text>{nombreImagen}</Text>
            </View>
        </View>
    );
}

export default CardClientes;

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