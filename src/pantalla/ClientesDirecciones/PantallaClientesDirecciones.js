import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';

import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [Identidad, setIdentidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState("");
  const titulo = 'Pantalla Clientes Direcciones';
  let MySwal = withReactContent(Swal);

  const navigation = useNavigation();

  const agregar = async () => {

  };

  const editar = async () => {

  };

  const eliminar = async () => {

  };

  const listar = async () => {

  };

  return (
    <View style={styles.contenedor}>

      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
          <TextInput
              placeholder="Identidad del Cliente"
              style={styles.entradas}
              value={Identidad}
              onChangeText={setIdentidad}
              keyboardType=  'decimal-pad'
              maxLength={13}
            >
            </TextInput>

            <TextInput
              placeholder="Dirección del Cliente"
              style={styles.entradas}
              value={direccion}
              onChangeText={setDireccion}
            >
            </TextInput>

            <TextInput
              placeholder="Fecha Creación AAAA-MM-DD"
              style={styles.entradas}
              value={fecha}
              onChangeText={setFecha}
              keyboardType=  'number-pad'
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
                title="Editar" color={"#FF7D00"}
                onPress={editar}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Eliminar" color={"#dc3545"}
                onPress={eliminar}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Listar" color={"#2BB509"}
                onPress={() => navigation.navigate("ListarClientesDirecciones")}
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
    marginTop: 20,
    padding: 10,
    width: "100%",
    height: "70%",
  },
  contenedorscroll:{
    minHeight: 90,
    height: "50%",
    marginTop: 120,
  },
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 560,
    width: 360,
    marginTop: 135,
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
    flex: 3,
    padding: 5,
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
    margin: 8,
  },
  entradas: {
    flex: 1,
    alignItems: "stretch",
    margin: 5,
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