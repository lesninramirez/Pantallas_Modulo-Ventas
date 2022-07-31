import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import { useNavigation } from '@react-navigation/native';

const EditarCliente = () => {

  const navigation= useNavigation();
  const [rtn, setRtn] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [idcliente, setidCliente] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: " ", value: " " }]);
  var textoMensaje = "";

  useEffect(() => {
    MostrarCliente();
  }, [setItems]);

  const MostrarCliente = async () => {

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

  const modificarCliente = async () => {

      await Axios.put('/clientes/editar?idcliente=' + idcliente,{
        rtn: rtn,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        correo: correo
      }
      ).then((respuesta)=>{
        console.log(respuesta.data);
        Mensaje({
          titulo: "Registro Cliente",
          msj: "Su registro fue guardado con exito",
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
            placeholder="Seleccione un id de Cliente"
            open={open}
            value={value}
            //onSelectItem={setCliente}
            onChangeValue={(value) => {
                setidCliente(value);
            }}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <TextInput
            placeholder="Ingrese el RTN"
            style={styles.entradas}
            value={rtn}
            onChangeText={setRtn}
            keyboardType=  'number-pad'
          >
          </TextInput>

          <TextInput
            placeholder="Ingrese el Nombre"
            style={styles.entradas}
            value={nombre}
            onChangeText={setNombre}
            keyboardType='default'
            maxLength={10}
          >
          </TextInput>

          <TextInput
            placeholder="Ingrese la direccion"
            style={styles.entradas}
            value={direccion}
            onChangeText={setDireccion}
           

          >
          </TextInput>

          <TextInput
              placeholder="Ingrese el Telefono"
              style={styles.entradas}
              value={telefono}
              onChangeText={setTelefono}
              keyboardType=  'phone-pad'
              maxLength={8}
            >
            </TextInput>


          <TextInput
              placeholder="Ingrese el Correo"
              style={styles.entradas}
              value={correo}
              onChangeText={setCorreo}
              keyboardType=  'email-address'
            >
            </TextInput>

        </View>

        <View style={styles.contenedorBotonesRedes}>
          <View style={styles.botonRedes}>
            <Button
              title="Guardar"
             onPress={modificarCliente}
            ></Button>
          </View>

          <View style={styles.botonRedes}>
            <Button
              title="Cancelar" color={"#FF7D00"}
              onPress={() => navigation.navigate("Clientes")}
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
    height: 990,
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
export default EditarCliente;
