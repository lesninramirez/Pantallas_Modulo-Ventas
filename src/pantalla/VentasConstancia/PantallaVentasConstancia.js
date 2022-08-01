import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from '@react-navigation/native';

const VentasConstancia = () => {
    const [numfactura, setNumfactura] = useState("");
    const [numcons, setNumcons] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    var textoMensaje = "";
    const [items, setItems] = useState([{ label: " ", value: " " }]);

    const titulo = 'Pantalla Ventas Constancia';

    const navigation = useNavigation();


    useEffect(() => {
      ListarVentas();
    }, [setItems]);

    const ListarVentas = async () => {

      try {
        await Axios.get('/ventas/listar', {
  
        })
          .then((data) => {
            const json = data.data;
            let jsonitems = [];
            json.forEach((element) => {
                jsonitems.push({
                  label: element.NumeroFactura.toString(),
                  value: element.NumeroFactura.toString(),
                });
                console.log(typeof element.NumeroFactura.toString());
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
    //}
  };

    const agregarConstancia = async () => {

      if(!numfactura || !numcons){
        Mensaje({
          titulo: "Registro Ventas Constancia",
          msj: "Datos Incompletos",
        });
      }
      else{

        const bodyParameters = {
          numfactura: numfactura,
          numcons: numcons

        };
        await Axios.post("constancia/agregar", bodyParameters)
          .then((data) => {
            const json = data.data;
            if (json.errores.length == 0) {
              console.log("Solicitud Realizada");
              Mensaje({
                titulo: "Registro Ventas Exentas",
                msj: "Registro guardado con éxito",
              });
            } else {
              json.errores.forEach((element) => {
                textoMensaje= "";
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
          <ScrollView>

            <View style={styles.contenedorLogin}>

                <View style={[styles.contenedorControles, styles.sombraControles]}>
                    <View style={styles.controles}>
                        <DropDownPicker
                             searchable={true}
                             style={styles.dropdown}
                             placeholder="Seleccione un id factura"
                             open={open}
                             value={value}
                             onChangeValue={(value) => {
                              setNumfactura(value);
                             }}
                             items={items}
                             setOpen={setOpen}
                             setValue={setValue}
                             setItems={setItems}
                        />
                    

                        <TextInput
                            placeholder="Ingrese el Numero de Orden"
                            style={styles.entradas}
                            value={numcons}
                            onChangeText={setNumcons}
                            keyboardType=  'default'
                        >
                        </TextInput>
                    </View>

                    <View style={styles.contenedorBotonesRedes}>
                        <View style={styles.botonRedes}>
                            <Button
                                title="Agregar"
                                onPress={agregarConstancia}
                            ></Button>
                        </View>

                        <View style={styles.botonRedes}>
                            <Button
                                title="Listar" color={"#2BB509"}
                                onPress={() => navigation.navigate("ListarVentasConstancia")}
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
      marginTop: 20,
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
      height: 300,
      width: 360,
      marginTop: 135,
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
      fontSize: 30,
      fontWeight: "500",
    },
    controles: {
      flex: 3,
      marginBottom: -5,
      paddingTop: 20,
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
      flex: 3,
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
    },
    dropdown: {
    
      zIndex: 1000
    }
  });
  export default VentasConstancia;