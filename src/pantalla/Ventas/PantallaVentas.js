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
    const [num_fact, setFactura] = useState("");
    const [cai, setCai] = useState("");
    const [cliente, setCliente] = useState("");
    const [tipopago, setTipopago] = useState("");
    const [usu, setUsu] = useState("");
    const [efectivo, setEfectivo] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [mesero, setMesero] = useState("");
    const [estacion, setEstacion] = useState("");
    const [tercera, setTercera] = useState("");
    const [desc, setDescuento] = useState("");
    const [anular, setAnular] = useState("");
    const [Cierre, setCierre] = useState("");
    const [Propina, setPropina] = useState("");
    const [total, setTotal] = useState("");
    const [exento, setExento] = useState("");
    const [impuesto15, setImp15] = useState("");
    const [impuesto18, setImp18] = useState("");
    const [exonerado, setExonerado] = useState("");

    var textoMensaje = "";
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);

    const [items, setItems] = useState([{ label: " ", value: " " }]);
    const [items2, setItems2] = useState([{ label: " ", value: " " }]);
    const [items3, setItems3] = useState([{ label: " ", value: " " }]);
    const titulo = 'Pantalla Ventas';
 


      useEffect(() => {
        ListarClientes();
        MostrarCai();
        MostrarEstaciones();
      }, [setItems], [setItems2], [setItems3]);
    
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


        if(!num_fact || !cai || !cliente || !tipopago || !usu || !efectivo || !tarjeta || !mesero || !estacion || !tercera || !desc || !anular || !Cierre || !Propina || !total || !exento || !impuesto15 || !impuesto18 || !exonerado){
            Mensaje({
                titulo: "Registro Ventas",
                msj: "Datos incompletos",
              });
        }
        else{
            const bodyParameters = {
                num_fact:num_fact,
                cai: cai,
                cliente: cliente,
                tipopago: tipopago,
                usu: usu,
                efectivo: efectivo,
                tarjeta: tarjeta,
                mesero: mesero,
                estacion: estacion,
                tercera: tercera,
                desc: desc,
                anular: anular,
                Cierre: Cierre,
                Propina: Propina,
                total: total,
                exento: exento,
                impuesto15: impuesto15,
                impuesto18: impuesto18,
                exonerado: exonerado
               };
               await Axios.post("/ventas/agregar", bodyParameters)
                 .then((data) => {
                   const json = data.data;
                   if (json.errores.length == 0) {
                     console.log("Solicitud Realizada");
                     Mensaje({
                       titulo: "Registro Ventas",
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
                            value={num_fact}
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
                        items={items2}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems2}
                    />

                    <DropDownPicker
                        searchable={true}
                        style={styles.dropdown}
                        placeholder="Seleccione un id de cliente"
                        open={open2}
                        value={value2}
                        onChangeValue={(value) => {
                            setCliente(value);
                        }}
                        items={items}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems}
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
                            value={efectivo}
                            onChangeText={setEfectivo}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Pago en Tarjeta"
                            style={styles.entradas}
                            value={tarjeta}
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
                            value={desc}
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
                            value={Cierre}
                            onChangeText={setCierre}
                        >
                        </TextInput>

                        <DropDownPicker
                        searchable={true}
                        style={styles.dropdown}
                        placeholder="Seleccione un id de estaciones"
                        open={open3}
                        value={value3}
                        onChangeValue={(value) => {
                            setEstacion(value);
                        }}
                        items={items3}
                        setOpen={setOpen3}
                        setValue={setValue3}
                        setItems={setItems3}
                    />

                        <TextInput
                            placeholder="Propina"
                            style={styles.entradas}
                            value={Propina}
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
                            value={impuesto15}
                            onChangeText={setImp15}
                            keyboardType='decimal-pad'
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Impuesto 18"
                            style={styles.entradas}
                            value={impuesto18}
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