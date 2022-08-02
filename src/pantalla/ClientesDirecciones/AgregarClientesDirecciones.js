import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UsuarioContext from '../../contexto/UsuarioContext';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from '@react-navigation/native';

const ClientesDirecciones = () => {
  const { token } = useContext(UsuarioContext);
  const [cliente, setCliente] = useState("");
  const [direc, setDireccion] = useState("");
  var textoMensaje = "";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: " ", value: " " }]);

  const titulo = 'Pantalla Clientes Direcciones';

  const navigation= useNavigation();

 /* const agregar = async () => {

  };

  const editar = async () => {

  };

  const eliminar = async () => {

  };

  const listar = async () => {

  };*/
  
  useEffect(() => {
    ListarClientes();
  }, [setItems]);

  const ListarClientes = async () => {

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
  };
  
  const guardarClientesDirecciones = async () => {
      
    if(!cliente || !direc){
      Mensaje({
        titulo: "Registro Cai",
        msj: "Datos Incompletos",
      });

    }
    else{

      const bodyParameters = {
        cliente: cliente,
        direc: direc
      };
      await Axios.post("/clientesdir/agregar", bodyParameters)
        .then((data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            console.log("Solicitud Realizada");
            Mensaje({
              titulo: "Registro Cliente Direccion",
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

    }
      
  };


  return (
    <View style={styles.contenedor}>

      <View style={styles.contenedorLogin}>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
          <DropDownPicker
            searchable={true}
            style={styles.dropdown}
            placeholder="Seleccione un id del cliente"
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
              onChangeText={setDireccion}
            >
            </TextInput>
          </View>

          <View style={styles.contenedorBotonesRedes}>
            <View style={styles.botonRedes}>
              <Button
                title="Agregar"
                onPress={guardarClientesDirecciones}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Editar" color={"#FF7D00"}
                onPress={() => navigation.navigate("EditarClientesDirecciones")}
              ></Button>
            </View>
            
            <View style={styles.botonRedes}>
              <Button
                title="Eliminar" color={"#dc3545"}
                onPress={() => navigation.navigate("EliminarClienteDireccion")}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Listar" color={"#2BB509"}
                onPress={() => navigation.navigate("ListarClientesDirecciones")}
              ></Button>
            </View>

          </View>

        </View>
      </View>

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
    height: "70%",
  },
  contenedorscroll:{
    minHeight: 90,
    height: "50%",
    marginTop: 120,
  },
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 460,
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
    flex: 3,
    padding: 5,
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
    margin: 8,
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

export default ClientesDirecciones;