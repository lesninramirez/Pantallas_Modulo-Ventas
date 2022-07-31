import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Prueba = () => {

    const navigation = useNavigation();
    const nav = createNativeStackNavigator();

    return (

            <ScrollView >


                    <View style={styles.contenedorTitulo}>
                        <Text style={styles.tituloLogin}>Agregar</Text>
                    </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Cai"
                                onPress={() => navigation.navigate("Cai")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Clientes"
                                onPress={() => navigation.navigate("Clientes")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Clientes Direcciones"
                                onPress={() => navigation.navigate("Direcciones")}
                            ></Button>
                        </View>

                        <View style={styles.contenedorTitulo}>
                            <Text style={styles.tituloLogin}>Agregar y Listar</Text>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Detalle Ventas"
                                onPress={() => navigation.navigate("Detalle Ventas")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Ventas"
                                onPress={() => navigation.navigate("Ventas")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Ventas Anuladas"
                                onPress={() => navigation.navigate("Ventas Anuladas")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Ventas Constancia"
                                onPress={() => navigation.navigate("Ventas Constancia")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Ventas Exentas"
                                onPress={() => navigation.navigate("Ventas Exentas")}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Ventas Sag"
                                onPress={() => navigation.navigate("Ventas Sag")}
                            ></Button>
                        </View>


                    <View style={styles.contenedorTitulo}>
                        <Text style={styles.tituloLogin}>Listar</Text>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Estaciones"
                        onPress={()=> navigation.navigate("PantallaEstaciones")}
                        ></Button>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Productos"
                        onPress={()=> navigation.navigate("PantallaProductos")}
                        ></Button>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Pos"
                        onPress={()=> navigation.navigate("PantallaPos")}
                        ></Button>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Detalle Pedido"
                        onPress={()=> navigation.navigate("PantallaDetallePedido")}
                        ></Button>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Pedido"
                        onPress={()=> navigation.navigate("PantallaPedido")}
                        ></Button>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Usuarios"
                        //onPress={()=> navigation.navigate("Cai")}
                        ></Button>
                    </View>

                    <View style={styles.botonRedes}>
                        <Button
                            title="Empleados"
                        //onPress={()=> navigation.navigate("Cai")}
                        ></Button>
                    </View>

            </ScrollView>

    );

};


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#e9ecef',
        alignItems: 'center',
        justifyContent: "center",
        margin: 0,
        padding: 20,
        width: "30%",
        height: "10%",
    },
    contenedorLogin: {
        alignItems: "stretch",
        justifyContent: 'center',
        height: 530,
        width: 360,
    },
    contenedorTitulo: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    contenedorControles: {
        flex: 3,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 25,
        backgroundColor: "#B7B5B4",
        padding: 10,
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
        flex: 4,
        marginBottom: 10,
        paddingTop: 10,
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
        flex: 2,
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
        margin: 5,
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

export default Prueba;