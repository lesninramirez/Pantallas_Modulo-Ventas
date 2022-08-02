import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardEstaciones from '../../componentes/CardEstaciones';


export default function PantallaEstaciones() {
  const [estaciones, setEstaciones] = useState("");
  const [lista, setLista] = useState("");
  var jsonList;
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista de Estaciones'
  var textoMensaje = "";


  useEffect(() => {
    MostrarEstaciones();
  }, [setLista]);




  const EstacionesRender = ({ item }) => {

    return (
      <CardEstaciones nombre={'Nombre de la Estación: ' + item.nombre} activo={'Activo o Inactivo: ' + item.activo}
        vistaprevia={'Vista Previa: ' + item.vistaprevia} tecladovirtual={'Teclado Virtual: ' + item.tecladovirtual}
        nombretipo={'Codigo Tipo: ' + item.nombretipo} nombreproducto={'Codigo del Producto: ' + item.nombreproducto}
        administracion={'Administración: ' + item.administracion} />


    );
  };

  const MostrarEstaciones = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('estacion/listar', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }


        })
          .then((data) => {

            setEstaciones(data.data);

            console.log(lista);

            /*else {
                textoMensaje = '';
                json.errores.forEach(element => {
                    textoMensaje += element.mensaje + '. ';
                });
                //Mensaje({ titulo: titulo, msj: textoMensaje });
            }*/
          })
          .catch((error) => {
            /*textoMensaje = error;
            Mensaje({ titulo: titulo, msj: textoMensaje });*/
          });
      } catch (error) {
        /*textoMensaje = error;
        console.log(error);
        Mensaje({ titulo: titulo, msj: error });*/
      }
    }
  }
  //Mensaje({ titulo: titulo, msj: textoMensaje });



  return (
    <ScrollView >
      <View style={styles.contenedor}>

        <View style={styles.contenedorFlat}>
          <FlatList
            data={estaciones}
            renderItem={EstacionesRender}
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
  contenedorFlat: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
  },
});