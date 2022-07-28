import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from '../../componentes/Axios';


export default function PantallaEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  const titulo = 'Pantalla Empleados';  

  useEffect(()=>{

    const listar = async () => {
      const respuesta= await Axios.get('empleados/listar');  

      setEmpleados(respuesta.data) //Contiene la respuesta de la peticion
  };

    try{ 
    listar();
  }
  catch(error){
    console.log(error);
  }
  },[])




  return (

    <>{empleados.map((empleado) => { //Llamar una arreglo
      return(
        
        <View style={styles.contenedor}>
          <Text style={styles.tituloLogin}>
          Registro 1
        </Text>
      <ScrollView >  
      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View 
          key={empleado?.NumeroEstacion}
          style={styles.controles}>
            <TextInput
              placeholder="Numero de Estacion"
              style={styles.entradas}
              value={'Numero de Estación: ' + empleado?.NumeroEstacion}
            >
            </TextInput>

            <TextInput
              placeholder="Nombre"
              style={styles.entradas}
              value={'Nombre: ' + empleado?.nombre}
            >
            </TextInput>

            <TextInput
              placeholder="Activo"
              style={styles.entradas}
              value={'Activo/Inactivo: ' + empleado?.activo}
            >
            </TextInput>

            <TextInput
              placeholder="Vista Previa"
              style={styles.entradas}
              value={'Vista Previa: ' + empleado?.vistaprevia}
            >
            </TextInput>

            <TextInput
              placeholder="Teclado Virtual"
              style={styles.entradas}
              value={'Teclado Virtual: ' + empleado?.tecladovirtual}
            >
            </TextInput>

            <TextInput
              placeholder="Nombre Tipo"
              style={styles.entradas}
              value={'Tipo: ' + empleado?.nombretipo}
            >
            </TextInput>

            <TextInput
              placeholder="Nombre del producto"
              style={styles.entradas}
              value={'Producto: ' + empleado?.nombreproducto}
            >
            </TextInput>

            <TextInput
              placeholder="Administracion"
              style={styles.entradas}
              value={'Administracion: ' + empleado?.administracion}
            >
            </TextInput>


          </View>

        </View>
      </View>
      </ScrollView>    
    </View>
      );
    })}
    </>


  );
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
  contenedorscroll:{
    minHeight: 90,
    height: "50%",
    marginTop: -10,
},
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 450,
    width: 360,
  },
  contenedorTitulo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contenedorControles: {
    flex: 2.5,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 25,
    backgroundColor: "#B7B5B4",
    padding: 4,
  },
  sombraControles: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tituloLogin: {
    color: "#495057",
    fontSize: 40,
    fontWeight: "500",
  },
  controles: {
    flex: 5,
    marginBottom: -5,
    paddingTop: -10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contenedorBotones: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  contenedorBotonesRedes: {
    flex: 2,
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  boton: {
    flex: 1,
    alignItems: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  botonRedes: {
    flex: 1,
    alignItems: "stretch",
    margin: 4,
  },
  entradas: {
    flex: 1,
    alignItems: "stretch",
    margin: 5,
    padding: 5,
    fontSize: 20,
    fontWeight: "400",
    color: "#495057",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ced4da",
    borderRadius: 15,
  }
});
