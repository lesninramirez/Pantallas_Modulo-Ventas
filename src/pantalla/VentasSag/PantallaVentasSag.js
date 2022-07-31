import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import DropDownPicker from "react-native-dropdown-picker";


import { useNavigation } from '@react-navigation/native';


export default function App() {
<<<<<<< HEAD
  const [numfac, setNumfact] = useState("");
  const [numsag, setNumSag] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  var textoMensaje = "";
  const [items, setItems] = useState([{ label: " ", value: " " }]);
=======
  const [numerof, setNumerof] = useState("");
  const [numero, setNumero] = useState("");
>>>>>>> isaac

  const titulo = 'Pantalla Ventas Sag';
  let MySwal = withReactContent(Swal);

<<<<<<< HEAD
    
  useEffect(() => {
    ListarVentasSag();
  }, [setItems]);

  const ListarVentasSag = async () => {

    try {
      await Axios.get('ventas/listar', {

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


  const agregar = async () => {
      //console.log(token);
      const bodyParameters = {
        numfac: numfac,
        numsag: numsag
      };
      await Axios.post("sag/agregar", bodyParameters)
        .then((data) => {
          const json = data.data;
          console.log(json);
          if (json.errores.length == 0) {
            console.log("Solicitud Realizada");
            Mensaje({
              titulo: "Registro Ventas Sag",
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
=======
  const navigation = useNavigation();


  const agregar = async () => {
>>>>>>> isaac

  };

  const listar = async () => {

  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorLogin}>

        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
<<<<<<< HEAD
            <DropDownPicker
              searchable={true}
              style={styles.dropdown}
              placeholder="Seleccione un id factura"
              open={open}
              value={value}
              //onSelectItem={setCliente}
              onChangeValue={(value) => {
                setNumfact(value);
              }}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />

=======
            <TextInput
              placeholder="Ingrese el Numero de Factura"
              style={styles.entradas}
              value={numerof}
              onChangeText={setNumerof}
              keyboardType='decimal-pad'

            >
            </TextInput>
>>>>>>> isaac

            <TextInput
              placeholder="Ingrese el Numero Sag"
              style={styles.entradas}
<<<<<<< HEAD
              value={numsag}
              onChangeText={setNumSag}
              keyboardType=  'default'
=======
              value={numero}
              onChangeText={setNumero}
              maxLength={20}
>>>>>>> isaac

            >
            </TextInput>

          </View>

          <View style={styles.contenedorBotonesRedes}>
            <View style={styles.botonRedes}>
              <Button
                title="Agregar"
                onPress={agregar}
              ></Button>
            </View>

            <View style={styles.botonRedes}>
              <Button
                title="Listar" color={"#2BB509"}
<<<<<<< HEAD
                onPress={listar}
              ></Button>
            </View>
=======
                onPress={() => navigation.navigate("ListarVentasSag")}
              ></Button>
            </View>

>>>>>>> isaac
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
    margin: 0,
    padding: 10,
    width: "100%",
    height: "100%",
  },
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 340,
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
<<<<<<< HEAD
  },
  dropdown: {
    
    zIndex: 1000
  },
=======
  }
>>>>>>> isaac
});