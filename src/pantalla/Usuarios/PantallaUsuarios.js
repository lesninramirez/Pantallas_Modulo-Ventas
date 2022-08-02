import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardUsuarios from '../../componentes/CardUsuarios';


export default function PantallaUsuarios() {
  const [usuarios, setUsuarios] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista de Usuarios'
  var textoMensaje = "";


  useEffect(() => {
    MostrarUsuarios();
  }, [setUsuarios]);




  const UsuariosRender = ({ item }) => {

    return (
      <CardUsuarios login={'Usuario: ' + item.login} idempleado={'Id del Empleado: ' + item.idempleado} 
      contrasena={'Contrasena: ' + item.contrasena} accesototal={'Acceso Total: ' + item.accesototal} 
      habilitado={'Habilitado: ' + item.habilitado} pin={'Pin: ' + item.pin} 
      fallidos={'Fallidos: ' + item.fallidos} correo={'Correo: ' + item.correo}
      estado={'Estado: ' + item.estado}/>

    );
  };

  const MostrarUsuarios = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('usuarios/listar', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }

        })
          .then((data) => {
            setUsuarios(data.data);

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
            data={usuarios}
            renderItem={UsuariosRender}
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
