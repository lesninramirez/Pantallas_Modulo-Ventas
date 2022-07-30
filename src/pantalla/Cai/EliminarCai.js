import React, { useState, useContext, useEffect } from "react";
import {StyleSheet,Text,View,Keyboard,TouchableWithoutFeedback,FlatList,ScrollView,Alert,} from "react-native";
import UsuarioContext from "../../contexto/UsuarioContext"
import Mensaje from "../../componentes/Mensaje"
import Axios from "../../componentes/Axios";
import CardEliminarCai from "../../componentes/CardCai";

const CaiListado = () => {
  
  var textoMensaje = "";
  const { token } = useContext(UsuarioContext);
  const [lista, setLista] = useState("");
  useEffect(() => {
    buscarCai();
  }, [setLista]);
    
  

  const pressHandler = (key) => {
      
    const cambiarDecision = () => {
        try {
            console.log(key);
            var textoMensaje = null;
            Axios.delete("clientes/eliminar?idCai=" + key, {
            })
              .then((data) => {
                const json = data.data;
                if (json.errores.length == 0) {
                  console.log("Eliminado con exito el registro");
                  buscarCai();
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
      
     
      
    Alert.alert("Eliminar Cai", "Desea eliminar el cai", [
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

  const buscarCai = async () => {
    try {
      await Axios.get("cai/listar", {
       
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
            <Text style={styles.tituloLogin}>Eliminar Cai</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.list}>
                <FlatList
                  data={lista}
                  keyExtractor={(item) => item.idregistro}
                  renderItem={({ item }) => (
                    <CardEliminarCai
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

export default CaiListado;