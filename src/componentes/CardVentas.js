import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const CardEstaciones = ({ nombre, activo, vistaprevia, tecladovirtual, nombretipo, nombreproducto, administracion }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorTexto}>
                <Text>{NumeroFactura}</Text>
                <Text>{idcai}</Text>
                <Text>{idcliente}</Text>
                <Text>{TipoPago}</Text>
                <Text>{Usu}</Text>
                <Text>{TEfectivo}</Text>
                <Text>{TTarjeta}</Text>
                <Text>{Mesero}</Text>
                <Text>{DescuentoTercera}</Text>
                <Text>{Descuento}</Text>
                <Text>{Anular}</Text>
                <Text>{cierre}</Text>
                <Text>{estacion}</Text>
                <Text>{fechahoraini}</Text>
                <Text>{fechahora}</Text>
                <Text>{propina}</Text>
                <Text>{totalventa}</Text>
                <Text>{Exento}</Text>
                <Text>{Impuesto15}</Text>
                <Text>{Impuesto18}</Text>
                <Text>{Exonerado}</Text>
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