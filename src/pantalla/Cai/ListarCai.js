import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardCai from '../../componentes/CardCai';


export default function PantallaClientes() {
  const [cai, setCai] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Listar Cai'
  var textoMensaje = "";


  useEffect(() => {
    MostrarCai();
  }, [setCai]);




  const CaiRender = ({ item }) => {

    return (
      <CardCai CAI={'CAI: ' + item.CAI} FechaLimite={'Fecha Limite: ' + item.FechaLimite} 
      NumeroInicial={'Numero Inicial: ' + item.NumeroInicial} NumeroFinal={'Numero Final: ' + item.NumeroFinal} 
      creado={'Creado en: ' + item.creado} activo={'Activo/Inactivo: ' + item.activo}  />

    );
  };

  const MostrarCai = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('cai/listar', {


        })
          .then((data) => {
            setCai(data.data);

          })
          .catch((error) => {

          });
      } catch (error) {

      }
    }
  }


  return (

      <View style={styles.contenedor}>

        <View style={styles.contenedorFlat}>
          <FlatList
            data={cai}
            renderItem={CaiRender}
          >
          </FlatList>
        </View>
      </View>




  )
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
  contenedorFlat:{
    flex:1,
    padding: 10,
    justifyContent:"space-evenly",
    flexDirection: "row",
    width: "100%",
  },
});