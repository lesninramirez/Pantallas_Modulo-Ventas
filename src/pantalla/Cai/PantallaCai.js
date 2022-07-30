import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import editarcai from "./EditarCai"


export default function App() {
  const [cai, setCai] = useState("");
  const [limite, setLimite] = useState("");
  const [numini, setNumini] = useState("");
  const [numfin, setNumfin] = useState("");
  const [creacion, setCreacion] = useState("");
  const [estado, setEstado] = useState("");
  const titulo = 'Pantalla Cai';
  let MySwal = withReactContent(Swal);

  const state = "Activo"

  //const prueba = editarcai();

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
      <ScrollView >  
      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
            <TextInput
              placeholder="Ingrese el Codigo Cai"
              style={styles.entradas}
              value={cai}
              onChangeText={setCai}
            >
            </TextInput>

            <TextInput
              placeholder="Fecha Limite / AAAA-MM-DD"
              style={styles.entradas}
              value={limite}
              onChangeText={setLimite}
              keyboardType='number-pad'
              maxLength={10}
            >
            </TextInput>

            <TextInput
              placeholder="Ingrese el Numero Inicial"
              style={styles.entradas}
              value={numini}
              onChangeText={setNumini}
              keyboardType='decimal-pad'

            >
            </TextInput>

            <TextInput
              placeholder="Ingrese el Numero Final"
              style={styles.entradas}
              value={numfin}
              onChangeText={setNumfin}
              keyboardType='decimal-pad'
            >
            </TextInput>

            <TextInput
              placeholder="Fecha Creacion AAAA-MM-DD"
              style={styles.entradas}
              value={creacion}
              onChangeText={setCreacion}
              keyboardType='number-pad'
              maxLength={10}
            >
            </TextInput>

            <TextInput
              placeholder="Activo o Inactivo"
              style={styles.entradas}
              value={state}
              onChangeText={setEstado}
              editable={false}
            >
            </TextInput>

          </View>

          <View style={styles.contenedorBotonesRedes}>
            <View style={styles.botonRedes}>
              <Button
                title="Agregar"
                //onPress={agregar}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Editar" color={"#FF7D00"}
                onPress={editarcai}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Eliminar" color={"#dc3545"}
                //onPress={Presshandler}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Listar" color={"#2BB509"}
                //onPress={listar}
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
    marginTop: -10,
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
