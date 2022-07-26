import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from '../componentes/Axios';
import Mensaje from '../componentes/Mensaje';
import UsuarioContext from '../contexto/UsuarioContext';

import {useNavigation} from '@react-navigation/native'



const Login = () => {

const navigation= useNavigation();

    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const titulo= 'Inicio de sesión'
    const { setLogin, msj }=useContext(UsuarioContext);
    useEffect(() =>{
      if(!msj){
        Mensaje({titulo: titulo, msj: 'Debe iniciar sesion'});
      }else{
        Mensaje({titulo: titulo, msj: msj});
      }
    }, [setLogin]);
    
    const iniciarSesion = async () => {
        if (usuario.length < 3){
          Mensaje({titulo: titulo, msj: 'Escriba el nombre de usuario'});
        }else if(contrasena.length < 6){
          Mensaje({titulo: titulo, msj: 'Escriba la contrasena'});
        }
        else{
          await setLogin({ usuario: usuario, contrasena: contrasena });
  
          if (setLogin) {
            setUsuario("");
            setContrasena("");
            navigation.navigate("Stack");
          }
            
          
          
          
        }
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorLogin}>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.tituloLogin}>Menú Digital</Text>
                </View>
                <View style={[styles.contenedorControles, styles.sombraControles]}>
                    <View style={styles.controles}>
                        <TextInput
                            placeholder="Escriba el nombre de usuario"
                            style={styles.entradas}
                            value={usuario}
                            onChangeText={setUsuario}
                        >
                        </TextInput>
                        <TextInput
                            placeholder="Escriba la contraseña"
                            style={styles.entradas}
                            passwordRules=""
                            secureTextEntry={true}
                            value={contrasena}
                            onChangeText={setContrasena}
                        >
                        </TextInput>
                    </View>

                    <View style={styles.contenedorBotonesRedes}>
                        <View style={styles.botonRedes}>
                            <Button
                                title="Iniciar Sesion"
                                onPress={(iniciarSesion)}
                            ></Button>
                        </View>
                        <View style={styles.botonRedes}>
                            <Button
                                title="Google" color={"#dc3545"}
                            >
                            </Button>
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
        margin: 0,
        padding: 20,
        width: "100%",
        height: "90%",
    },
    contenedorLogin: {
        alignItems: "stretch",
        justifyContent: 'center',
        height: 530,
        width: 360,
    },
    contenedorTitulo: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    contenedorControles: {
        flex: 3,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 25,
        backgroundColor: "#B7B5B4",
        padding: 10,
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
        flex: 4,
        //backgroundColor: "#29291f",
        marginBottom: 10,
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
        margin: 5,
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

export default Login;