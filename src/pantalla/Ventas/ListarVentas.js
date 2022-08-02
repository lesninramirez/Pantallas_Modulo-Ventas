import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import CardVentas from '../../componentes/CardVentas';


export default function PantallaVentas() {
  const [ventas, setVentas] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista de Ventas'
  var textoMensaje = "";

  useEffect(() => {
    MostrarVentas();
  }, []);

  const VentasRender = ({ item }) => {

    return (
      <CardVentas NumeroFactura={'Numero de Factura: ' + item.NumeroFactura} idcai={'Id Cai: ' + item.idcai} 
      idcliente={'Id Cliente: ' + item.idcliente} TipoPago={'Tipo de Pago: ' + item.TipoPago}
      Usu={'Usu: ' + item.Usu} TEfectivo={'Tranferencia en fectivo: ' + item.TEfectivo}
      TTarjeta={'Transferencia en Tarjeta: ' + item.TTarjeta} Mesero={'Mesero: ' + item.Mesero}
      DescuentoTercera={'Descuento Tercera Edad: ' + item.DescuentoTercera} Descuento={'Descuento: ' + item.Descuento}
      Anular={'Anular: ' + item.Anular} cierre={'Cierre: ' + item.cierre}
      estacion={'Estacion: ' + item.estacion} fechahoraini={'Fecha y Hora Inicial: ' + item.fechahoraini} 
      fechahora={'Fecha y Hora: ' + item.fechahora} propina={'Propina: ' + item.propina}
      totalventa={'Total Venta: ' + item.totalventa} Exento={'Exento: ' + item.Exento} 
      Impuesto15={'Impuesto 15%: ' + item.Impuesto15} Impuesto18={'Impuesto 18%: ' + item.Impuesto18} 
      Exonerado={'Exonerado: ' + item.Exonerado}    />
    );
  };

  const MostrarVentas = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('ventas/listar', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }
        })
          .then((data) => {
            
            setVentas(data.data);

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
            data={ventas}
            renderItem={VentasRender}
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