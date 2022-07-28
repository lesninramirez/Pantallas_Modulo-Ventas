import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import CardPedidos from '../../componentes/CardPedido'


export default function PantallaPedido() {
  const [pedidos, setPedidos] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista de Pedidos'
  var textoMensaje = "";

  useEffect(() => {
    MostrarPedidos();
  }, []);

  const PedidosRender = ({ item }) => {

    return (
      <CardPedidos idmesero={'Id del mesero: ' + item.idmesero} fechahora={'Fecha y Hora: ' + item.fechahora} 
      Estacion={'Estacion: ' + item.Estacion} activo={'Activo/Inactivo: ' + item.activo} 
      modalidad={'Modalidad: ' + item.modalidad} estado={'Estado: ' + item.estado}  />
    );
  };

  const MostrarPedidos = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('pedidos/listar', {

        })
          .then((data) => {
            
            setPedidos(data.data);

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
            data={pedidos}
            renderItem={PedidosRender}
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