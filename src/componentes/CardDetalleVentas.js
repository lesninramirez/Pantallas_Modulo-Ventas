import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardDetalleVentas = ({ NumeroFactura, CodigoProducto, Cantidad, Precio, preciooriginal, impuesto, grabadoExento }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{NumeroFactura}</Text>
                <Text>{CodigoProducto}</Text>
                <Text>{Cantidad}</Text>
                <Text>{Precio}</Text>
                <Text>{preciooriginal}</Text>
                <Text>{impuesto}</Text>
                <Text>{grabadoExento}</Text>
            </View>
        </View>
    );
}

export default CardDetalleVentas;

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