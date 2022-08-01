import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import { useNavigation } from '@react-navigation/native';


const EditarClientesDirecciones = () => {

    const navigation= useNavigation();
    const [direc, setDirec] = useState("");
    const [cliente, setCliente] = useState("");
    const [idClienteDireccion, setidClienteDireccion] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{ label: " ", value: " " }]);
    var textoMensaje = "";

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([{ label: " ", value: " " }]);
  
    useEffect(() => {
      MostrarClientesDirecciones();
      MostrarClientes();
    }, [setItems2],[setItems] );
    
    const MostrarClientesDirecciones = async () => {
  
     /* if (!token) {
        textoMensaje = "Debe iniciar sesion";
      }
      else {*/
        try {
          await Axios.get('clientesdir/listar', {
  
          })
            .then((data) => {
              const json = data.data;
              let jsonitems = [];
              json.forEach((element) => {
                  jsonitems.push({
                    label: element.id.toString(),
                    value: element.id.toString(),
                  });
                  console.log(typeof element.id.toString());
                });
                setItems2(jsonitems);
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

    const MostrarClientes = async () => {
  
        /* if (!token) {
           textoMensaje = "Debe iniciar sesion";
         }
         else {*/
           try {
             await Axios.get('clientes/listar', {
     
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
         //}
       };
  
    const modificarClienteDireccion = async () => {
  
        await Axios.put('/clientesdir/editar?idClienteDireccion=' + idClienteDireccion,{
            cliente:cliente,
            direc:direc
        }
        ).then((respuesta)=>{
          console.log(respuesta.data);
          Mensaje({
            titulo: "Registro Clientes Direcciones",
            msj: "Su registro fue editado con exito",
          });
        }).catch((error)=>{
          console.log(error);
        });
    };
  
      return (
         
      <View style={styles.contenedor}>
      <ScrollView >  
      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
          <DropDownPicker
              searchable={true}
              style={styles.dropdown}
              placeholder="Seleccione un id de cliente direccion"
              open={open2}
              value={value2}
              //onSelectItem={setCliente}
              onChangeValue={(value) => {
                setidClienteDireccion(value);
              }}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
            />
            
          <DropDownPicker
              searchable={true}
              style={styles.dropdown}
              placeholder="Seleccione un id de Cliente"
              open={open}
              value={value}
              //onSelectItem={setCliente}
              onChangeValue={(value) => {
                setCliente(value);
              }}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />

            

            <TextInput
              placeholder="Dirección del Cliente"
              style={styles.entradas}
              value={direc}
              onChangeText={setDirec}
            >
            </TextInput>

  
          </View>
  
          <View style={styles.contenedorBotonesRedes}>
            <View style={styles.botonRedes}>
              <Button
                title="Guardar"
               onPress={modificarClienteDireccion}
              ></Button>
            </View>
  
            <View style={styles.botonRedes}>
              <Button
                title="Cancelar" color={"#FF7D00"}
                onPress={() => navigation.navigate("Direcciones")}
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
      height: 390,
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
    },
  });
  export default EditarClientesDirecciones;
  