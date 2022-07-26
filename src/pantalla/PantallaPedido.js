import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from '../componentes/Axios';


export default function PantallaPedido() {
  const [pedidos, setPedido] = useState([]);

  const titulo = 'Pantalla Pedidos';  

  useEffect(()=>{

    const listar = async () => {
      const respuesta= await Axios.get('estacion/listar');  

      setPedido(respuesta.data) //Contiene la respuesta de la peticion
  };

    try{ 
    listar();
  }
  catch(error){
    console.log(error);
  }
  },[])




  return (

    <>{pedidos.map((pedido) => { //Llamar una arreglo
      return(
        
        <View style={styles.contenedor}>
          <Text style={styles.tituloLogin}>
          Registro 1
        </Text>
      <ScrollView >  
      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View 
          key={pedido?.NumeroPedido}
          style={styles.controles}>
            <TextInput
              placeholder="Numero de Pedido"
              style={styles.entradas}
              value={'Numero de Pedido: ' + pedido?.NumeroPedido}
            >
            </TextInput>

            <TextInput
              placeholder="Id del Mesero"
              style={styles.entradas}
              value={'Id del Mesero: ' + pedido?.idmesero}
            >
            </TextInput>

            <TextInput
              placeholder="Fecha y Hora"
              style={styles.entradas}
              value={'Fecha y Hora: ' + pedido?.fechahora}
            >
            </TextInput>

            <TextInput
              placeholder="Estacion"
              style={styles.entradas}
              value={'Estacion: ' + pedido?.Estacion}
            >
            </TextInput>

            <TextInput
              placeholder="Activo"
              style={styles.entradas}
              value={'Activo: ' + pedido?.activo}
            >
            </TextInput>

            <TextInput
              placeholder="Modalidad"
              style={styles.entradas}
              value={'Modalidad: ' + pedido?.modalidad}
            >
            </TextInput>

            <TextInput
              placeholder="Estado"
              style={styles.entradas}
              value={'Estado: ' + pedido?.estado}
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
