import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardDetallePedido from '../../componentes/CardDetallePedido';


export default function PantallaDetallePedido() {
  const [detallep, setDetalleP] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista Detalle Pedido'
  var textoMensaje = "";


  useEffect(() => {
    MostrarDetallePedidos();
  }, [setDetalleP]);




  const DetallePRender = ({ item }) => {

    return (
      <CardDetallePedido NumeroPedido={'Numero de Pedido: ' + item.NumeroPedido} CodigoPedido={'Codigo de Pedido: ' + item.CodigoPedido} 
      Cantidad={'Cantidad: ' + item.Cantidad} Cancelado={'Cancelado: ' + item.Cancelado} 
      Notas={'Notas: ' + item.Notas} Elaborado={'Elaborado: ' + item.Elaborado} 
      Entregado={'Entregado: ' + item.Entregado} Facturado={'Facturado: ' + item.Facturado} subproducto={'Sub Producto: ' + item.subproducto} />


    );
  };

  const MostrarDetallePedidos = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('detallepedidos/listar', {


        })
          .then((data) => {
            setDetalleP(data.data);

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
            data={detallep}
            renderItem={DetallePRender}
          /*keyExtractor={item=>item.NumeroEstacion}*/
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
