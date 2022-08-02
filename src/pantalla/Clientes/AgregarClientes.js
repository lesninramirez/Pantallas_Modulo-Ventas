import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import UsuarioContext from '../../contexto/UsuarioContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

const AgregarClientes = () => {
  const { token } = useContext(UsuarioContext);
  const [rtn, setRtn] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [imagen, setImagen] = useState("");
  const [nombreimagen, setNombreI] = useState("");
  const [lista, setLista] = useState("");
  const titulo = 'Pantalla Clientes';

  const navigation = useNavigation();


  var textoMensaje = "";
  const [items, setItems] = useState([{ label: " ", value: " " }]);

  useEffect(() => {
    ListarClientes();
  }, [setItems]);

  const ListarClientes = async () => {

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('clientes/listar', {

        })
          .then((data) => {
            const json = data.data;
            let jsonitems = [];
            console.log(lista);
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

  const guardarClientes = async () => {
    //console.log(token);
    const bodyParameters = {
      rtn: rtn,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      correo: correo,
      nombre_imagen: nombre_imagen
      
    };
    await Axios.post("/clientes/agregar", bodyParameters)
      .then((data) => {
        const json = data.data;
        if (json.errores.length == 0) {
          console.log("Solicitud Realizada");
          Mensaje({
            titulo: "Registro Cliente",
            msj: "Registro guardado con éxito",
          });
        } else {
          textoMensaje = "";
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
  };

  const [nombre_imagen, setProfileImage] = useState('');

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();


    if (status !== 'granted') {
      alert('lo siento, debes tener disponible una camara');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  }

  const uploadProfileImage = () => {
    console.log(nombre_imagen);
  }

  return (
    <View style={styles.contenedor}>
      <ScrollView >
        <View style={styles.contenedorLogin}>
          <View style={[styles.contenedorControles, styles.sombraControles]}>
            <View style={styles.controles}>
              <TextInput
                placeholder="Ingrese el RTN"
                style={styles.entradas}
                value={rtn}
                onChangeText={setRtn}
                keyboardType='number-pad'
              >
              </TextInput>

              <TextInput
                placeholder="Ingrese el Nombre"
                style={styles.entradas}
                value={nombre}
                onChangeText={setNombre}
                keyboardType='default'
              >
              </TextInput>

              <TextInput
                placeholder="Ingrese la Direccion"
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
                keyboardType='phone-pad'
                maxLength={8}
              >
              </TextInput>

              <TextInput
                placeholder="Ingrese el Correo"
                style={styles.entradas}
                value={correo}
                onChangeText={setCorreo}
                keyboardType='email-address'
              >
              </TextInput>

              <TextInput
                placeholder="Imagen"
                style={styles.entradas}
                value={nombre_imagen}
                onChangeText={setProfileImage}
                editable= {false}
              >
              </TextInput>


              <View>
                <TouchableOpacity onPress={openImageLibrary} style={styles.uploadbtncontainer}>
                  {nombre_imagen ?

                    <Image source={{ uri: nombre_imagen }}
                      style={{ width: '100%', height: '100%', borderRadius: 60 }}
                    /> :
                    <Text style={styles.uploadbtn}>
                      Subir Imagen
                    </Text>
                  }
                </TouchableOpacity>
                <Text style={styles.skip}>

                </Text>

                {nombre_imagen ? (

                  <Text onPress={uploadProfileImage} style={[styles.skip.fontSize, { backgroundColor: 'black', color: 'white' }]}>
                    Upload
                  </Text>
                ) : null}
              </View>

            </View>

            <View style={styles.contenedorBotonesRedes}>
              <View style={styles.botonRedes}>
                <Button
                  title="Agregar"
                  onPress={guardarClientes}
                ></Button>
              </View>

              <View style={styles.botonRedes}>
                <Button
                  title="Editar" color={"#FF7D00"}
                  onPress={() => navigation.navigate("EditarCliente")}
                ></Button>
              </View>

              <View style={styles.botonRedes}>
                <Button
                  title="Eliminar" color={"#dc3545"}
                  onPress={() => navigation.navigate("EliminarCliente")}
                ></Button>
              </View>

              <View style={styles.botonRedes}>
                <Button
                  title="Listar" color={"#2BB509"}
                  onPress={() => navigation.navigate("ListarClientes")}
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
  contenedorscroll: {
    minHeight: 400,
    height: 500,
    height: "100%",
    marginBottom: -200,
  },
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 830,
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
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadbtn:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadbtncontainer:{
    height: 125,
    width: 125,
    borderRadius: 125/2,
    justifyContent: 'center',
    alignItems:'center',
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  skip:{
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
});
export default AgregarClientes;
