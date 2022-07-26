import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from '../componentes/Axios';


export default function PantallaProductos() {
  const [productos, setProductos] = useState([]);

  const titulo = 'Pantalla Productos';  

  useEffect(()=>{

    const listar = async () => {
      const respuesta= await Axios.get('productos/listar');  

      setProductos(respuesta.data) //Contiene la respuesta de la peticion
  };

    try{ 
    listar();
  }
  catch(error){
    console.log(error);
  }
  },[])




  return (

    <>{productos.map((producto) => { //Llamar una arreglo
      return(
        
        <View style={styles.contenedor}>
          <Text style={styles.tituloLogin}>
          Registro 1
        </Text>
      <ScrollView >  
      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View 
          key={producto?.Codigo}
          style={styles.controles}>
            <TextInput
              placeholder="Codigo de Producto"
              style={styles.entradas}
              value={'Codigo de Producto: ' + producto?.Codigo}
            >
            </TextInput>

            <TextInput
              placeholder="Nombre"
              style={styles.entradas}
              value={'Nombre: ' + producto?.Nombre}
            >
            </TextInput>

            <TextInput
              placeholder="Descripcion"
              style={styles.entradas}
              value={'Descripcion: ' + producto?.Descripcion}
            >
            </TextInput>

            <TextInput
              placeholder="Tipo de Poducto"
              style={styles.entradas}
              value={'Tipo de Poducto: ' + producto?.TipoProducto}
            >
            </TextInput>

            <TextInput
              placeholder="Existencia"
              style={styles.entradas}
              value={'Existencia: ' + producto?.Existencia}
            >
            </TextInput>

            <TextInput
              placeholder="Precio"
              style={styles.entradas}
              value={'Precio: ' + producto?.Precio}
            >
            </TextInput>

            <TextInput
              placeholder="Costo"
              style={styles.entradas}
              value={'Costo: ' + producto?.Costo}
            >
            </TextInput>

            <TextInput
              placeholder="Cantidad Minima"
              style={styles.entradas}
              value={'Cantidad Minima: ' + producto?.CantidadMinima}
            >
            </TextInput>

            <TextInput
              placeholder="Exento"
              style={styles.entradas}
              value={'Exento: ' + producto?.exento}
            >
            </TextInput>

            <TextInput
              placeholder="Imagen"
              style={styles.entradas}
              value={'Imagen: ' + producto?.Imagen}
            >
            </TextInput>

            <TextInput
              placeholder="Habilitado"
              style={styles.entradas}
              value={'Habilitado: ' + producto?.Habilitado}
            >
            </TextInput>

            <TextInput
              placeholder="Tipo(Secundario)"
              style={styles.entradas}
              value={'Tipo(Secundario): ' + producto?.Tipo2}
            >
            </TextInput>

            <TextInput
              placeholder="Orden"
              style={styles.entradas}
              value={'Orden: ' + producto?.orden}
            >
            </TextInput>

            <TextInput
              placeholder="Impuesto"
              style={styles.entradas}
              value={'Impuesto: ' + producto?.impuestov}
            >
            </TextInput>

            <TextInput
              placeholder="Valor del Impuesto"
              style={styles.entradas}
              value={'Valor del Impuesto: ' + producto?.impuestoValor}
            >
            </TextInput>

            <TextInput
              placeholder="Ultimo"
              style={styles.entradas}
              value={'Ultimo: ' + producto?.ultimo}
            >
            </TextInput>

            <TextInput
              placeholder="Nombre de la Imagen"
              style={styles.entradas}
              value={'Nombre Imagen: ' + producto?.nombreImagen}
            >
            </TextInput>

            <TextInput
              placeholder="Id Principal"
              style={styles.entradas}
              value={'Id Principal: ' + producto?.idprincipal}
            >
            </TextInput>

            <TextInput
              placeholder="Cantidad Principal"
              style={styles.entradas}
              value={'Cantidad Principal: ' + producto?.cantidadprincipal}
            >
            </TextInput>

            <TextInput
              placeholder="Id Usuario"
              style={styles.entradas}
              value={'Id Usuario: ' + producto?.idusuario}
            >
            </TextInput>

            <TextInput
              placeholder="Movimiento"
              style={styles.entradas}
              value={'Movimiento: ' + producto?.moviento}
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
    height: 1080,
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