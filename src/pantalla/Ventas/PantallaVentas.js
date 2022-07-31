import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext  } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from '@react-navigation/native';

const Ventas = () => {
    const [factura, setFactura] = useState("");
    const [cai, setCai] = useState("");
    const [idcliente, setCliente] = useState("");
    const [tipopago, setTipopago] = useState("");
    const [usu, setUsu] = useState("");
    const [tefectivo, setEfectivo] = useState("");
    const [ttarjeta, setTarjeta] = useState("");
    const [mesero, setMesero] = useState("");
    const [tercera, setTercera] = useState("");
    const [descuento, setDescuento] = useState("");
    const [anular, setAnular] = useState("");
    const [cierre, setCierre] = useState("");
    const [estacion, setEstacion] = useState("");
    const [propina, setPropina] = useState("");
    const [total, setTotal] = useState("");
    const [exento, setExento] = useState("");
    const [imp15, setImp15] = useState("");
    const [imp18, setImp18] = useState("");
    const [exonerado, setExonerado] = useState("");

    var textoMensaje = "";
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{ label: " ", value: " " }]);
    const [items1, setItems2] = useState([{ label: " ", value: " " }]);
    const [items2, setItems3] = useState([{ label: " ", value: " " }]);
    const titulo = 'Pantalla Ventas';
    let MySwal = withReactContent(Swal);

    useEffect(() => {
        ListarClientes();
      }, [setItems]);

      useEffect(() => {
        MostrarCai();
      }, [setItems2]);

      /*useEffect(() => {
        ListarClientes();
        MostrarCai();
      }, [setItems], [setItems2]);*/
    
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

      const MostrarCai = async () => {

          try {
            await Axios.get('cai/listar', {
    
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
      };

      const MostrarEstaciones = async () => {

        try {
          await Axios.get('estacion/listar', {
  
          })
            .then((data) => {
              const json = data.data;
              let jsonitems = [];
              json.forEach((element) => {
                  jsonitems.push({
                    label: element.NumeroEstacion.toString(),
                    value: element.NumeroEstacion.toString(),
                  });
                  console.log(typeof element.NumeroEstacion.toString());
                });
                setItems3(jsonitems);
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

    const agregar = async () => {

    };

    const listar = async () => {

    };

    return (
        
        <View style={styles.contenedor}>
        <ScrollView style={styles.contenedorscroll}>    
            <View style={styles.contenedorLogin}>

                <View style={[styles.contenedorControles, styles.sombraControles]}>
                    <View style={styles.controles}>
                        <TextInput
                            placeholder="Ingrese el Numero de Factura"
                            style={styles.entradas}
                            value={factura}
                            onChangeText={setFactura}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <DropDownPicker
                        searchable={true}
                        style={styles.dropdown}
                        placeholder="Seleccione un id de cai"
                        open={open}
                        value={value}
                        onChangeValue={(value) => {
                            setCai(value);
                        }}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                         <DropDownPicker
                        searchable={true}
                        style={styles.dropdown}
                        placeholder="Seleccione un id del cliente"
                        open={open}
                        value={value}
                        onChangeValue={(value) => {
                            setCliente(value);
                        }}
                        items2={items2}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems2={setItems2}
                    />

                        <TextInput
                            placeholder="Contado / Credito"
                            style={styles.entradas}
                            value={tipopago}
                            onChangeText={setTipopago}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese el Usuario"
                            style={styles.entradas}
                            value={usu}
                            onChangeText={setUsu}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Pago en Efectivo"
                            style={styles.entradas}
                            value={tefectivo}
                            onChangeText={setEfectivo}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Pago en Tarjeta"
                            style={styles.entradas}
                            value={ttarjeta}
                            onChangeText={setTarjeta}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Mesero"
                            style={styles.entradas}
                            value={mesero}
                            onChangeText={setMesero}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Descuento Tercera Edad"
                            style={styles.entradas}
                            value={tercera}
                            onChangeText={setTercera}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Descuento"
                            style={styles.entradas}
                            value={descuento}
                            onChangeText={setDescuento}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Anular"
                            style={styles.entradas}
                            value={anular}
                            onChangeText={setAnular}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Cierre"
                            style={styles.entradas}
                            value={cierre}
                            onChangeText={setCierre}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Estacion"
                            style={styles.entradas}
                            value={estacion}
                            onChangeText={setEstacion}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Propina"
                            style={styles.entradas}
                            value={propina}
                            onChangeText={setPropina}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Total de la Venta"
                            style={styles.entradas}
                            value={total}
                            onChangeText={setTotal}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Exento"
                            style={styles.entradas}
                            value={exento}
                            onChangeText={setExento}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Impuesto 15"
                            style={styles.entradas}
                            value={imp15}
                            onChangeText={setImp15}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Impuesto 18"
                            style={styles.entradas}
                            value={imp18}
                            onChangeText={setImp18}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Exonerado"
                            style={styles.entradas}
                            value={exonerado}
                            onChangeText={setExonerado}
                            keyboardType='decimal-pad'
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
                                onPress={() => navigation.navigate("ListarVentas")}
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
        marginBottom: 0,
    },
    contenedorscroll:{
        minHeight: 90,
        height: "50%",
        marginTop: 10,
    },
    contenedorLogin: {
        alignItems: "stretch",
        justifyContent: 'center',
        height: 2000,
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
        padding: 3,
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
        flex: 13,
        marginBottom: 5,
        paddingTop: 10,
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
        flex: 1.2,
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
    scrollView: {
        marginHorizontal: 1,
      },
    entradas: {
        flex: 1,
        alignItems: "stretch",
        margin: 8,
        padding: 8,
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

export default Ventas;