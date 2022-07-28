import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform } from 'react-native';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';

export default function App() {
    const [usuario, setUsuario] = useState("");
    const [descripcion, setDesc] = useState("");
    const [fecha, setFecha] = useState("");
    const titulo = 'Ventas Anuladas';
    let MySwal = withReactContent(Swal);

    const agregar = async () => {

    };

    const listar = async () => {
        
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorLogin}>

                <View style={[styles.contenedorControles, styles.sombraControles]}>
                    <View style={styles.controles}>
                        <TextInput
                            placeholder="Ingrese el Usuario"
                            style={styles.entradas}
                            value={usuario}
                            onChangeText={setUsuario}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese la Descripcion"
                            style={styles.entradas}
                            value={descripcion}
                            onChangeText={setDesc}
                            maxLength={250}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese la Fecha"
                            style={styles.entradas}
                            value={fecha}
                            onChangeText={setFecha}
                            keyboardType='number-pad'
                            maxLength={10}
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
                                onPress={listar}
                            ></Button>
                        </View>
                    </View>
                </View>
            </View>
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
    contenedorLogin: {
      alignItems: "stretch",
      justifyContent: 'center',
      height: 440,
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
      fontSize: 30,
      fontWeight: "500",
    },
    controles: {
      flex: 3,
      marginBottom: -5,
      paddingTop: 20,
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