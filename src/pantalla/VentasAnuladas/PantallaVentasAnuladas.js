import { StyleSheet, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import UsuarioContext from '../../contexto/UsuarioContext';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from '@react-navigation/native';

const AgregarAnuladas = () => {
  const { token } = useContext(UsuarioContext);
  const [venta, setventa] = useState("");
  const [usua, setusua] = useState("");
  const [des, setdes] = useState("");
  const titulo = 'Pantalla Ventas Anuladas';

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const navigation = useNavigation();

  var textoMensaje = "";
  const [items, setItems] = useState([{ label: " ", value: " " }]);

  useEffect(() => {
    ListarVentasAnuladas();
  }, [setItems]);

  const ListarVentasAnuladas = async () => { 

    if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {
      try {
        await Axios.get('ventas/listar', {

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

  const guardaranuladas = async () => {
    
    if(!venta || !usua || !des){
      Mensaje({
        titulo: "Registro Venta Anulada",
        msj: "Datos incompletos",
      });
    }
    else{
      const bodyParameters = {
        venta: venta,
        usua: usua,
        des: des
      };
      await Axios.post("anuladas/agregar", bodyParameters)
        .then((data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            console.log("Solicitud Realizada");
            Mensaje({
              titulo: "Registro Ventas Anuladas",
              msj: "Registro guardado con éxito",
            });
          } else {
            console.log(data);
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
      <ScrollView >
        <View style={styles.contenedorLogin}>
          <View style={[styles.contenedorControles, styles.sombraControles]}>
            <View style={styles.controles}>
              <DropDownPicker
                searchable={true}
                style={styles.dropdown}
                placeholder="Seleccione un id de Venta"
                open={open}
                value={value}
                onChangeValue={(value) => {
                  setventa(value);
                }}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />


              <TextInput
                placeholder="Usuario"
                style={styles.entradas}
                value={usua}
                onChangeText={setusua}
                keyboardType='number-pad'
              >
              </TextInput>

              <TextInput
                placeholder="descripcion"
                style={styles.entradas}
                value={des}
                onChangeText={setdes}
                keyboardType='default'
              >
              </TextInput>

            </View>

            <View style={styles.contenedorBotonesRedes}>
              <View style={styles.botonRedes}>
                <Button
                  title="Agregar"
                  onPress={guardaranuladas}
                ></Button>
              </View>

              <View style={styles.botonRedes}>
                <Button
                  title="Listar" color={"#2BB509"}
                  onPress={() => navigation.navigate("ListarVentasAnuladas")}
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
export default AgregarAnuladas;