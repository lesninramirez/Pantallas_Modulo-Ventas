import React, { useState, useContext, useEffect } from "react";
import {StyleSheet,Text,View,Keyboard,TouchableWithoutFeedback,FlatList,ScrollView,Alert,} from "react-native";
import UsuarioContext from "../contexto/UsuarioContext"
import Mensaje from "../componentes/Mensaje"
import Axios from "../componentes/Axios";
import CardEliminarCliente from "../../componentes/CardClientes";

const ClienteListado = () => {
  
  var textoMensaje = "";
  const { token } = useContext(UsuarioContext);
  const [lista, setLista] = useState("");
  useEffect(() => {
    buscarCliente();
  }, [setLista]);
    
  

  const pressHandler = (key) => {
      
    const cambiarDecision = () => {
        try {
            console.log(key);
            var textoMensaje = null;
            Axios.delete("clientes/eliminar?id=" + key, {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
              .then((data) => {
                const json = data.data;
                if (json.errores.length == 0) {
                  console.log("Eliminado con exito el registro");
                  buscarCliente();
                } else {
                  textoMensaje = "";
                  json.errores.forEach((element) => {
                    textoMensaje += element.mensaje + ". ";
                  });
                }
              })
              .catch((error) => {
                textoMensaje = error;
              });
          } catch (error) {
            textoMensaje = error;
            console.log(error);
          }
    }
      
     
      
    Alert.alert("Eliminar Cliente", "Desea eliminar el cliente", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
          onPress: () => cambiarDecision()
      },
    ]);
      
  };

  const buscarCliente = async () => {
    try {
      await Axios.get("/clientes/listar", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((data) => {
          const json = data.data;
          setLista(json);
          console.log(lista);

          // else {
          //      textoMensaje = '';
          //      json.errores.forEach(element => {
          //          textoMensaje += element.mensaje + '. ';
          //      });

          //  }
        })

        .catch((error) => {
          textoMensaje = error;
          Mensaje({ titulo: "Error registro", msj: textoMensaje });
        });
    } catch (error) {
      //         textoMensaje = error;
      //         console.log(error);
      //         Mensaje({ titulo: 'Error registro', msj: error });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.contenedor}>
          <View style={styles.contenedorTitulo}>
            <Text style={styles.tituloLogin}>Eliminar Cliente</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.list}>
                <FlatList
                  data={lista}
                  keyExtractor={(item) => item.idregistro}
                  renderItem={({ item }) => (
                    <CardEliminarCliente
                      item={item}
                      pressHandler={pressHandler}
                    />
                  )}
                />
              </View>
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor:"#344955",
    //alignItems: 'center',
    //justifyContent: "center",
    margin: 0,
    padding: 20,
    width: "100%",
    height: "100%",
  },

  contenedorTitulo: {
    marginTop: 30,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  list: {
    marginTop: 40,
  },

  tituloLogin: {
    color:  "#FFF",
    fontSize: 40,
    fontWeight: "500",
  },
  boton: {
    //flex: 1,
    alignItems: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  botonRedes: {
    //flex:1,
    alignItems: "stretch",
    margin: 5,
  },
});

export default ClienteListado;