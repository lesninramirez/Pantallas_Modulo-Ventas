import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';


const CardEliminarCliente = ({ item , pressHandler}) => {
    return (
        <View style={styles.contenedor}>
            <TouchableOpacity onPress={()=>pressHandler(item.idregistro, item.RTN, item.Nombre , item.Direccion, item.Telefono, item.Correo, item.Imagen, item.nombreImagen )}>
                <Text>Id de Registro: {item.idregistro}</Text>
                <Text>Rtn: {item.RTN}</Text>
                <Text>Nombre: {item.Nombre}</Text>
                <Text>Direccion: {item.Direccion}</Text>
                <Text>Telefono: {item.Telefono}</Text>
                <Text>Correo: {item.Correo}</Text>
                <Text>Imagen: {item.Imagen}</Text>
                <Text>Nombre Imagen: {item.nombreImagen}</Text>
            </TouchableOpacity>
        </View>
    );
    
}

export default CardEliminarCliente;


const styles = StyleSheet.create({
    contenedor: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        padding: 10,
        flexDirection: "column",
        marginBottom:10,
    },
    contenedorTexto: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
   
    texto: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
    }
});




import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { colores, sizes } from "../../estilos/estilos";
import UsuarioContext from "../../contexto/UsuarioContext";
import Mensaje from "../../componentes/Mensaje";
import DropDownPicker from "react-native-dropdown-picker";
import Axios from "../../componentes/Axios";

const AgregarPedidosLlevar = () => {
  const { token } = useContext(UsuarioContext);
  const [idpedido, setIdpedido] = useState("");
  const [idcliente, setIdcliente] = useState("");
  var textoMensaje = "";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: " ", value: " " }]);
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Jammu & Kashmir" },
    { key: "2", value: "Gujrat" },
    { key: "3", value: "Maharashtra" },
    { key: "4", value: "Goa" },
  ];


  useEffect(() => {
    buscarPedidos();
  }, [setItems]);


  const buscarPedidos = async () => {
    try {
      await Axios.get("/pedidos/pedidos/listar", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((data) => {
          const json = data.data;
          let jsonitems = [];
          console.log(json[1]);
          json.forEach((element) => {
            jsonitems.push({
              label: element.NumeroPedido.toString(),
              value: element.NumeroPedido.toString(),
            });
            console.log(typeof element.NumeroPedido.toString());
          });
          setItems(jsonitems);
        })
        .catch((error) => {
          textoMensaje = error;
          Mensaje({ titulo: "Error registro", msj: textoMensaje });
        });
    } catch (error) {
      textoMensaje = error;
      console.log(error);
      Mensaje({ titulo: "Error registro", msj: error });
    }
  };

  
  const guardarPedidos = async () => {
    if (!token) {
      textoMensaje = "Debe iniciar sesion";
      console.log(token);
    } else {
      console.log(token);
      const bodyParameters = {
        idpedido: idpedido,
        idcliente: idcliente,
      };
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await Axios.post("/pedidos/pedidosllevar/guardar", bodyParameters, config)
        .then((data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            console.log("Solicitud Realizada");
            Mensaje({
              titulo: "Registro Pedidos Llevar",
              msj: "Su registro fue guardado con exito",
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
    }
    console.log(textoMensaje);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.contenedor}>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.tituloLogin}>Agregar Pedidos Llevar</Text>
        </View>
              <View style={styles.contenedorInputs}>
              <Text style={styles.inputLabel}>Id Pedido:</Text>
          <DropDownPicker
            searchable={true}
            style={styles.dropdown}
            placeholder="Seleccione un id de pedido"
            open={open}
            value={value}
            onChangeValue={(value) => {
              setIdpedido(value);
            }}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <TextInput
            placeholder="Ingrese el Id del cliente"
            style={styles.entradas}
            value={idcliente}
            onChangeText={setIdcliente}
            autoFocus={false}
            keyboardType={"numeric"}
          ></TextInput>
        </View>
        <View style={styles.contenedorBoton}>
          <TouchableOpacity
            onPress={() => {
              guardarPedidos();
            }}
          >
            <Text style={styles.item}>Agregar Registro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 20,
    flex: 1
    },
    tituloLogin: {
        color: colores.gris800,
        fontSize: 25,
        fontWeight: "500",
        
    },
    contenedorTitulo: {

        backgroundColor: 'gray',
        height: '5%',
        alignItems: "center",
        justifyContent: "center",
        },

  contenedorInputs: {
    width: "90%",
    height: "60%",
    justifyContent: "space-evenly",
  },
  entradas: {
    padding: 15,
    fontSize: 20,
    fontWeight: "400",
    color: "#495057",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ced4da",
    borderRadius: 15,
  },
  contenedorBoton: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
  },

  item: {
    backgroundColor: colores.gris800,
    padding: 18,
    color: "white",
  },
    dropdown: {
    
    zIndex: 1000
  },
});

export default AgregarPedidosLlevar;