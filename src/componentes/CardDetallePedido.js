import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardDetallePedido = ({ NumeroPedido, CodigoPedido, Cantidad, Cancelado, Notas, Elaborado, Entregado, Facturado, subproducto }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{NumeroPedido}</Text>
                <Text>{CodigoPedido}</Text>
                <Text>{Cantidad}</Text>
                <Text>{Cancelado}</Text>
                <Text>{Notas}</Text>
                <Text>{Elaborado}</Text>
                <Text>{Entregado}</Text>
                <Text>{Facturado}</Text>
                <Text>{subproducto}</Text>
            </View>
        </View>
    );
}

export default CardDetallePedido;

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