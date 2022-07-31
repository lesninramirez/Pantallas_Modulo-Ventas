<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, TextInput, KeyboardAvoidingView,Keyboard, TouchableWithoutFeedback, Modal, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import Button from '../../componentes/Button';
import { AntDesign } from '@expo/vector-icons'; 

export default function Opciones({ route , navigation}) {
    
    const{idregistro,CAI, FechaLimite, NumeroInicial, NumeroFinal}=route.params;
    const [cai, setCai]= useState(CAI);
    const [fecha_limite, setFechalim]= useState(FechaLimite);
    const [numero_ini, setNumini]= useState(NumeroInicial);
    const [numero_fin, setNumfin]= useState(NumeroFinal);
    const [visibleModificar, setVisibleModificar]= useState(false);


    const modificarCai = async () => {
            try {
                let solicitud= await fetch(
                    'http://http://192.168.0.28:3002/api/cai/editar?idCai='+idregistro,
                    {
                      method: 'PUT',
                      headers: {
                        Accept: 'application/json', 
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          CAI:cai, 
                          FechaLimite:fecha_limite,
                          NumeroInicial: numero_ini,
                          NumeroFinal: numero_fin
                      })
                    }
                  );
                  const respuesta= await solicitud.json();
                  const response= respuesta.msg; 
                  console.log(respuesta); 
                  

            }catch(error){
                console.log(error);
            }
    }
    return (
        <SafeAreaView style={styles.safeView}>
        <Modal transparent={true}
                            animationType={'fade'}
                            visible={visibleModificar}
                            >
                        <View style={styles.containerPmodalModificar}>
                          <View style={styles.conatinerInfoModalModificar}>
                          <AntDesign name="checkcircle" size={24} color="green" />
                          <Text style={styles.textmessagemodalModificar}>Registro Modificado</Text>
                                  <Pressable style={styles.pressabelStyleModalModificar} onPress={  () => {
                                   setVisibleModificar(false);
                                    //navigation.navigate('ListarProveedores');
                                  }}>
                                    <Text style={styles.textbotonModalModificar}>Cerrar</Text>
                                  </Pressable>
                          </View> 
                        </View>
                      </Modal>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboarStyle}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.containerPri}>
                        <Text style={styles.textTittle}>Editar Cai</Text>
                        
                        <Text style={styles.textInpu}>Cai</Text>
                        <TextInput style={styles.inputs} onChangeText={newText=>setCai(newText)} defaultValue={''+CAI} ></TextInput>
                        
                        <Text style={styles.textInpu}>Fecha Limite</Text>
                        <TextInput style={styles.inputs} onChangeText={newText=>setFechalim(newText)} defaultValue={''+FechaLimite} ></TextInput>
                        
                        <Text style={styles.textInpu}>Numero Inicial</Text>
                        <TextInput style={styles.inputs} onChangeText={newText=>setNumini(newText)} defaultValue={''+NumeroInicial}></TextInput>
                        
                        <Text style={styles.textInpu}>Numero Final</Text>
                        <TextInput style={styles.inputs} onChangeText={newText=>setNumfin(newText)} defaultValue={''+NumeroFinal}></TextInput>
                   

                        <View style={{marginTop:60, justifyContent:'center', alignItems:'center'}}>
                            <Button text = "Modificar"  
                                onPress={() => {
                                    if(!cai||!fecha_limite||!numero_ini||!numero_fin){
                                      Alert.alert("Llene todos los campos");
                                    }else{
                                      modificarCai();
                                      setVisibleModificar(true);
                                    }
                                }}
                            />
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    </SafeAreaView>
=======
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import { useNavigation } from '@react-navigation/native';

const EditarCai = () => {

  const navigation= useNavigation();
  const [cai, setCai] = useState("");
  const [ fecha_limite, setLimite] = useState("");
  const [numero_ini, setNumini] = useState("");
  const [numero_fin, setNumfin] = useState("");
  const [activoCai, setActivo] = useState("");
  const [idCai, setidCai] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: " ", value: " " }]);
  var textoMensaje = "";

  useEffect(() => {
    MostrarCai();
  }, [setItems]);

  const MostrarCai = async () => {

   /* if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {*/
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

  const modificarCai = async () => {

      await Axios.put('/cai/editar/?idCai=' + idCai,{
        cai: cai,
        fecha_limite: fecha_limite,
        numero_ini: numero_ini,
        numero_fin: numero_fin,
        activoCai: activoCai
      }
      ).then((respuesta)=>{
        console.log(respuesta.data);
        Mensaje({
          titulo: "Registro Cai",
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
            placeholder="Seleccione un id de Cai"
            open={open}
            value={value}
            //onSelectItem={setCliente}
            onChangeValue={(value) => {
              setidCai(value);
            }}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <TextInput
            placeholder="Ingrese el Codigo Cai"
            style={styles.entradas}
            value={cai}
            onChangeText={setCai}
            autoFocus={false}
          >
          </TextInput>

          <TextInput
            placeholder="Fecha Limite / AAAA-MM-DD"
            style={styles.entradas}
            value={fecha_limite}
            onChangeText={setLimite}
            //keyboardType='number-pad'
            maxLength={10}
          >
          </TextInput>

          <TextInput
            placeholder="Ingrese el Numero Inicial"
            style={styles.entradas}
            value={numero_ini}
            onChangeText={setNumini}
            keyboardType='decimal-pad'

          >
          </TextInput>

          <TextInput
            placeholder="Ingrese el Numero Final"
            style={styles.entradas}
            value={numero_fin}
            onChangeText={setNumfin}
            keyboardType='decimal-pad'
          >
          </TextInput>

          <TextInput
            placeholder="Activo o Inactivo"
            style={styles.entradas}
            value={activoCai}
            onChangeText={setActivo}
           // editable={false}
          >
          </TextInput>

        </View>

        <View style={styles.contenedorBotonesRedes}>
          <View style={styles.botonRedes}>
            <Button
              title="Guardar"
             onPress={modificarCai}
            ></Button>
          </View>

          <View style={styles.botonRedes}>
            <Button
              title="Cancelar" color={"#FF7D00"}
              onPress={() => navigation.navigate("Cai")}
            ></Button>
          </View>

        </View>

      </View>
    </View>
    </ScrollView>    
  </View>
>>>>>>> bb062b3fb67d2e2e6a76338986562cee1e9b5a5b
  );
}


const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeView:{
    flex: 1, 
    height: StatusBar.currentHeight || 0,
    marginBottom: '15%'
},
keyboarStyle: {
    flex: 1
},
containerPri: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection:'column',
    paddingTop:80,
},
textTittle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: '40%',
    marginTop: '3%',
    marginBottom: '2%'
},
textInpu: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: '3%',
    marginTop: '3%',
    color: 'black',
},
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#2A67CA',
    marginTop: '3%'
  },
  containerBotones: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '10%'
},
buttonModificar: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#2A67CA',
    margin: '5%',
    height: '20%',
    justifyContent: 'center',
    borderRadius: 5
},
textButton: {
    color: 'white'
},
containerPmodalModificar: {
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'rgba(0, 0, 0, 0.5)'
  },
  conatinerInfoModalModificar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: '5%'
  },
  pressabelStyleModalModificar: {
    marginTop: '8%',
    paddingLeft: '20%',
    paddingRight:'20%',
    backgroundColor: '#3EA5DB',
    paddingBottom:'4%',
    borderRadius: 10
  },
  textbotonModalModificar: {
    color: '#fff',
    marginTop: '6%'
  },
  textmessagemodalModificar: {
    color:'green',
    marginTop: '1%',
  }
});
=======
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
export default EditarCai;
>>>>>>> bb062b3fb67d2e2e6a76338986562cee1e9b5a5b
