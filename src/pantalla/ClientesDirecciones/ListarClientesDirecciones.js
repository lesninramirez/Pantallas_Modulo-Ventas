import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardDirecciones from '../../componentes/CardClientesDirecciones';


export default function PantallaClientesDirecciones() {
  const [direcciones, setDirecciones] = useState("");
  const { token } = useContext(UsuarioContext);
  var jsonList;
  const titulo = 'Lista Clientes Direcciones'
  var textoMensaje = "";


  useEffect(() => {
    MostrarDirecciones();
  }, [setDirecciones]);




  const ClientesDireccionesRender = ({ item }) => {

    return (
      <CardDirecciones id_cliente={'Identidad del cliente: ' + item.id_cliente} direccion={'Dirección: ' + item.direccion} 
      creada={'Creada en: ' + item.creada} />

    );
  };

  const MostrarDirecciones = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('clientesdir/listar', {


        })
          .then((data) => {
            setDirecciones(data.data);
            console.log(jsonList);

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
            data={direcciones}
            renderItem={ClientesDireccionesRender}
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