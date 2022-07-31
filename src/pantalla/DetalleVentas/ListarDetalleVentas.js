import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardDetalleVentas from '../../componentes/CardDetalleVentas';


export default function PantallaDetalleVentas() {
  const [dventas, setDVentas] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista Detalle Ventas'
  var textoMensaje = "";


  useEffect(() => {
    MostrarDVentas();
  }, [setDVentas]);




  const DetalleVentasRender = ({ item }) => {

    return (
      <CardDetalleVentas NumeroFactura={'Numero de Factura: ' + item.NumeroFactura} CodigoProducto={'Codigo de Producto: ' + item.CodigoProducto} 
      Cantidad={'Cantidad: ' + item.Cantidad} Precio={'Precio: ' + item.Precio} 
      preciooriginal={'Precio Original: ' + item.preciooriginal} impuesto={'Impuesto: ' + item.impuesto} 
      grabadoExento={'Grabado Exento: ' + item.grabadoExento} />


    );
  };

  const MostrarDVentas = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('detalleventas/listar', {


        })
          .then((data) => {
            setDVentas(data.data);

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
            data={dventas}
            renderItem={DetalleVentasRender}
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