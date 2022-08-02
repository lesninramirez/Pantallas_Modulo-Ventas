import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardEmpleados from '../../componentes/CardEmpleados';


export default function PantallaEmpleados() {
  const [empleados, setEmpleados] = useState("");
  const { token } = useContext(UsuarioContext);
  const titulo = 'Lista de Empleados'
  var textoMensaje = "";


  useEffect(() => {
    MostrarEmpleados();
  }, [setEmpleados]);




  const EmpleadoRender = ({ item }) => {

    return (
      <CardEmpleados NumeroIdentidad={'Numero de Identidad: ' + item.NumeroIdentidad} NombreEmpleado={'Nombre del Empleado: ' + item.NombreEmpleado} 
      ApellidoEmpleado={'Apellido del Empleado: ' + item.ApellidoEmpleado} CargoEmpleado={'Cargo del Empleado: ' + item.CargoEmpleado} 
      FechaIngreso={'Fecha de Ingreso: ' + item.FechaIngreso} Salario={'Salario: ' + item.Salario} 
      nombreImagen={'nombre de la Imagen: ' + item.nombreImagen} />

    );
  };

  const MostrarEmpleados = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('empleados/listar', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }

        })
          .then((data) => {
            setEmpleados(data.data);

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
            data={empleados}
            renderItem={EmpleadoRender}
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
