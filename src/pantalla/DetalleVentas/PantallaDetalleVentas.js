import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';

import { useNavigation } from '@react-navigation/native';

export default function App() {
    const [factura, setFactura] = useState("");
    const [codigo, setCodigo] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precio, setPrecio] = useState("");
    const [poriginal, setOriginal] = useState("");
    const [impuesto, setImpuesto] = useState("");
    const [exento, setExento] = useState("");
    const titulo = 'Pantalla Detalle Ventas';
    let MySwal = withReactContent(Swal);

    const navigation = useNavigation();

    const agregar = async () => {

    };

    const listar = async () => {

    };

    return (
        <View style={styles.contenedor}>
            <ScrollView style={styles.contenedorscroll}>    
            <View style={styles.contenedorLogin}>

                <View style={[styles.contenedorControles, styles.sombraControles]}>
                    <View style={styles.controles}>
                        <TextInput
                            placeholder="Numero de Factura"
                            style={styles.entradas}
                            value={factura}
                            onChangeText={setFactura}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Codigo del Producto"
                            style={styles.entradas}
                            value={codigo}
                            onChangeText={setCodigo}
                            keyboardType='decimal-pad'
                            maxLength={15}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese la Cantidad"
                            style={styles.entradas}
                            value={cantidad}
                            onChangeText={setCantidad}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese el Precio"
                            style={styles.entradas}
                            value={precio}
                            onChangeText={setPrecio}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Precio Original"
                            style={styles.entradas}
                            value={poriginal}
                            onChangeText={setOriginal}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese el Impuesto"
                            style={styles.entradas}
                            value={impuesto}
                            onChangeText={setImpuesto}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Grabado Exento"
                            style={styles.entradas}
                            value={exento}
                            onChangeText={setExento}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>
                    </View>

                    <View style={styles.contenedorBotonesRedes}>
                        <View style={styles.botonRedes}>
                            <Button
                                title="Agregar"
                                onPress={agregar}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Listar" color={"#2BB509"}
                                onPress={() => navigation.navigate("ListarDetalleVentas")}
                            ></Button>
                        </View>

                    </View>
                </View>
            </View>
            </ScrollView>    
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#e9ecef',
        alignItems: 'center',
        justifyContent: "center",
        margin: 0,
        padding: 10,
        width: "100%",
        height: "100%",
    },
    contenedorscroll:{
        minHeight: 90,
        height: "50%",
        marginTop: 10,
    },
    contenedorLogin: {
        alignItems: "stretch",
        justifyContent: 'center',
        height: 990,
        width: 360,
    },
    contenedorTitulo: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    contenedorControles: {
        flex: 2.5,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 25,
        backgroundColor: "#B7B5B4",
        padding: 4,
    },
    sombraControles: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tituloLogin: {
        color: "#495057",
        fontSize: 40,
        fontWeight: "500",
    },
    controles: {
        flex: 5,
        marginBottom: -5,
        paddingTop: -10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contenedorBotones: {
        flex: 1,
        padding: 10,
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    contenedorBotonesRedes: {
        flex: 1.5,
        padding: 10,
        justifyContent: "space-evenly",
        flexDirection: "column",
    },
    boton: {
        flex: 1,
        alignItems: "stretch",
        marginLeft: 10,
        marginRight: 10,
    },
    botonRedes: {
        flex: 1,
        alignItems: "stretch",
        margin: 4,
    },
    entradas: {
        flex: 1,
        alignItems: "stretch",
        margin: 10,
        padding: 10,
        fontSize: 20,
        fontWeight: "400",
        color: "#495057",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ced4da",
        borderRadius: 15,
    }
});