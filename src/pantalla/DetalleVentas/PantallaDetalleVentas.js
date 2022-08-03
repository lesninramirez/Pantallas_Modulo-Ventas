import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import UsuarioContext from '../../contexto/UsuarioContext';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';

import { useNavigation } from '@react-navigation/native';

const AgregarDVentas = () => {
  const { token } = useContext(UsuarioContext);  
  const [numfact, setfactura] = useState("");
  const [codpro, setcodpro] = useState("");
  const [cantidad, setcantidad] = useState("");
  const [prec, setprec] = useState("");
  const titulo = 'Pantalla Detalle Ventas';


  const navigation = useNavigation();


  var textoMensaje = "";
  const [items, setItems] = useState([{ label: " ", value: " " }]);

  useEffect(() => {
    ListarDetalleVentas();
  }, [setItems]);

  const ListarDetalleVentas = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('detalleventas/listar', {

        })
          .then((data) => {
            const json = data.data;
            let jsonitems = [];
            json.forEach((element) => {
                jsonitems.push({
                  label: element.idregistro.toString(),
                  value: element.idregistro.toString(),
                });
                console.log(typeof element.idregistro.toString());
              });
              setItems(jsonitems);
          })
          .catch((error) => {
            textoMensaje = error;
            Mensaje({ titulo: "Error en el registro", msj: textoMensaje });
          });
      } catch (error) {
        textoMensaje = error;
        console.log(error);
        Mensaje({ titulo: "Error en el registro", msj: error });
      }
    }
  };
  
  const guardardetalleventas = async () => {
      //console.log(token);

        if(!numfact || !codpro || !cantidad || !prec){
            Mensaje({
                titulo: "Registro Cliente",
                msj: "Datos incompletos",
              });
        
        }
        else{
            const bodyParameters = {
                numfact: numfact,
                codpro: codpro,
                cantidad: cantidad,
                prec: prec
              };
              await Axios.post('detalleventas/agregar', bodyParameters)
                .then((data) => {
                  const json = data.data;
                  if (json.errores.length == 0) {
                    console.log("Solicitud Realizada");
                    Mensaje({
                      titulo: "Registro Detalle Ventas",
                      msj: "Registro guardado con éxito",
                    });
                  } else {
                    //textoMensaje = "";
                    json.errores.forEach((element) => {
                      textoMensaje += element.mensaje + ". ";
                      Mensaje({ titulo: "Error en el registro", msj: textoMensaje });
                    });
                  }
                })
                .catch((error) => {
                  textoMensaje = error;
                });
            console.log(textoMensaje);
        }      
  };


  return (
    <View style={styles.contenedor}>
      <ScrollView >    
      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
            <TextInput
              placeholder="Ingrese Numero Factura"
              style={styles.entradas}
              value={numfact}
              onChangeText={setfactura}
              keyboardType=  'number-pad'
            >
            </TextInput>

            <TextInput
              placeholder="Ingrese el Codigo del Producto"
              style={styles.entradas}
              value={codpro}
              onChangeText={setcodpro}
              keyboardType=  'number-pad'
            >
            </TextInput>

            <TextInput
              placeholder="Ingrese la cantidad"
              style={styles.entradas}
              value={cantidad}
              onChangeText={setcantidad}
              keyboardType=  'number-pad'
            >
            </TextInput>

            <TextInput
              placeholder="Ingrese el precio"
              style={styles.entradas}
              value={prec}
              onChangeText={setprec}
              keyboardType=  'number-pad'
             
            >
            </TextInput>

          </View>

          <View style={styles.contenedorBotonesRedes}>
            <View style={styles.botonRedes}>
              <Button
                title="Agregar"
                onPress={guardardetalleventas}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Listar" color={"#2BB509"}
                onPress={() => navigation.navigate("ListarDetalleVentas")}
              ></Button>
            </View>
          </View>

        </View>
      </View>
      </ScrollView>   
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: "center",
    margin: 0,
    padding: 15,
    width: "100%",
    height: "100%",
  },
  contenedorscroll:{
    minHeight: 400,
    height:500,
    height: "100%",
    marginBottom: -200,
},
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 490,
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
    margin: 10,
    padding: 10,
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
export default AgregarDVentas;