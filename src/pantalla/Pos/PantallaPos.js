import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import CardPos from '../../componentes/CardPos'


export default function PantallaPos() {
  const [pos, setPos] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista Pos'
  var textoMensaje = "";


  useEffect(() => {
    MostrarPos();
  }, []);




  const PosRender = ({ item }) => {

    return (
      <CardPos nombre={'Nombre: ' + item.nombre} descripcion={'Descripcion: ' + item.descripcion} 
      activo={'Activo/Inactivo: ' + item.activo} />
    );
  };

  const MostrarPos = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('pos/listar', {


        })
          .then((data) => {
            setPos(data.data);

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
            data={pos}
            renderItem={PosRender}
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
