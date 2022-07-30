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
  );
}


const styles = StyleSheet.create({
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