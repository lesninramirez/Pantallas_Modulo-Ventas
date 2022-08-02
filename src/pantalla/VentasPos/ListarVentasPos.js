import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardVentasPos from '../../componentes/CardVentasPos';


export default function ListarVentasPos() {
  const [ventaspos, setVentasPos] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista Ventas Pos'
  var textoMensaje = "";


  useEffect(() => {
    MostrarVentasPos();
  }, []);




  const VentasPosRender = ({ item }) => {

    return (
      <CardVentasPos id_venta={'Id de la Venta: ' + item.id_venta} idpos={'Id Pos: ' + item.idpos} 
      referencia={'Referencia: ' + item.referencia} numerotarjeta={'Numero de Tarjeta: ' + item.numerotarjeta} 
      valor={'Valor: ' + item.valor} nombrepropietario={'Nombre del Propietario: ' + item.nombrepropietario} 
      idmarca={'Id Marca: ' + item.idmarca} />


    );
  };

  const MostrarVentasPos = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('pos/listar', {


        })
          .then((data) => {

            setVentasPos(data.data);

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
            data={ventaspos}
            renderItem={VentasPosRender}
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