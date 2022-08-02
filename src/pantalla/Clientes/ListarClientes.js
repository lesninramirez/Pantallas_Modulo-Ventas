import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardClientes from '../../componentes/CardClientes';


export default function PantallaClientes() {
  const [clientes, setClientes] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Listar Clientes'
  var textoMensaje = "";


  useEffect(() => {
    MostrarClientes();
  }, [setClientes]);




  const ClientesRender = ({ item }) => {
    var imagen = "https://reactnative.dev/img/tiny_logo.png"; 

    return (
      <CardClientes RTN={'RTN: ' + item.RTN} Nombre={'Nombre: ' + item.Nombre} 
      Direccion={'Direccion: ' + item.Direccion} Telefono={'Telefono: ' + item.Telefono} 
      Correo={'Correo: ' + item.Correo} imagen={item.imagen}
      nombreImagen={'Nombre de la Imagen: ' + item.nombreImagen} />


    );
  };

  const MostrarClientes = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('clientes/listar', {


        })
          .then((data) => {
            setClientes(data.data);

          })
          .catch((error) => {

          });
      } catch (error) {

      }
    }
  }


  return (
    <ScrollView >
      <View style={styles.contenedor}>

        <View style={styles.contenedorFlat}>
          <FlatList
            data={clientes}
            renderItem={ClientesRender}
          >
          </FlatList>
        </View>
      </View>

    </ScrollView>


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