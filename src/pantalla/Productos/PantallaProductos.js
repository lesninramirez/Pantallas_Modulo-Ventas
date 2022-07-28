import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import CardProductos from '../../componentes/CardProductos';


export default function PantallaProductos() {
  const [productos, setProductos] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista de Productos'
  var textoMensaje = "";

  useEffect(() => {
    MostrarProductos();
  }, []);

  const ProductosRender = ({ item }) => {

    return (
      <CardProductos Nombre={'Nombre: ' + item.Nombre} Descripcion={'Descripción: ' + item.Descripcion} 
      TipoProducto={'Tipo Producto: ' + item.TipoProducto} Existencia={'Existencia: ' + item.Existencia}
      Precio={'Precio: ' + item.Precio} Costo={'Costo: ' + item.Costo}
      CantidadMinima={'Cantidad Minima: ' + item.CantidadMinima} exento={'Exento: ' + item.exento}
      Imagen={'Imagen: ' + item.Imagen} Habilitado={'Habilitado: ' + item.Habilitado}
      Tipo2={'Tipo: ' + item.Tipo2} orden={'Orden: ' + item.orden}
      impuestov={'Impuesto: ' + item.impuestov} impuestoValor={'Impuesto Valor: ' + item.impuestoValor} 
      ultimo={'Ultimo: ' + item.ultimo} nombreImagen={'Nombre Imagen: ' + item.nombreImagen}
      idprincipal={'Id Principal: ' + item.idprincipal} cantidadprincipal={'Cantidad Principal: ' + item.cantidadprincipal} 
      idusuario={'Id Usuario: ' + item.idusuario} movimiento={'Movimiento: ' + item.movimiento}   />
    );
  };

  const MostrarProductos = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('productos/listar', {

        })
          .then((data) => {
            
            setProductos(data.data);

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
            data={productos}
            renderItem={ProductosRender}
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