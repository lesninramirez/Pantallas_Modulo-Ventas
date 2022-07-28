import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardProductos = ({ Nombre, Descripcion, TipoProducto, Existencia, Precio, Costo, CantidadMinima, 
                        exento, Imagen, Habilitado, Tipo2, orden, impuestov, impuestoValor,
                        ultimo, nombreImagen, idprincipal, cantidadprincipal, idusuario, movimiento}) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{Nombre}</Text>
                <Text>{Descripcion}</Text>
                <Text>{TipoProducto}</Text>
                <Text>{Existencia}</Text>
                <Text>{Precio}</Text>
                <Text>{Costo}</Text>
                <Text>{CantidadMinima}</Text>
                <Text>{exento}</Text>
                <Text>{Imagen}</Text>
                <Text>{Habilitado}</Text>
                <Text>{Tipo2}</Text>
                <Text>{orden}</Text>
                <Text>{impuestov}</Text>
                <Text>{impuestoValor}</Text>
                <Text>{ultimo}</Text>
                <Text>{nombreImagen}</Text>
                <Text>{idprincipal}</Text>
                <Text>{cantidadprincipal}</Text>
                <Text>{idusuario}</Text>
                <Text>{movimiento}</Text>
            </View>
        </View>
    );
}

export default CardProductos;

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