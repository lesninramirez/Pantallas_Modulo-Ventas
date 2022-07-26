import React, { useReducer} from "react"
import UsuarioContext from "./UsuarioContext"
import UsuarioReducer from "./UsuarioReducer"
import Axios from "../componentes/Axios";
import { AsyncStorageStatic } from "react-native";



const UsuarioState = (props, {navigation}) => {
    const incialState = {
        usuario: null,
        token: null,
        errores: [],
        msj: ""
    }
    const [estado, dispath] = useReducer(UsuarioReducer, incialState)
    const getUser = () => {
        dispath({
            acciones: 'GET_USER',
        });
    }
    const setLogin = async (data) => {
        try {
            var textoMensaje=null;
            var usuario= null;
            var token= null;
            await Axios.post('autenticacion/iniciosesion',{
                usuario: data.usuario,
                contrasena: data.contrasena
            })
            .then((data)=>{
                const json=data.data;
                if(json.errores.length==0){
                    usuario = json.datos.usuario.login;
                    token= json.datos.token;
                    console.log(token);
                    textoMensaje = 'Bienvenido ' + usuario;
                }
                else{
                    textoMensaje='';
                    json.errores.forEach(element => {
                        textoMensaje+= element.mensaje + 'Hola';
                    });
                }
            })
            .catch((error)=>{
                textoMensaje=error;
            });
        } catch (error) {
            textoMensaje=error;
            console.log(error);
        }
        dispath({
            datos: {
                usuario: usuario, 
                token:token,
                msj: textoMensaje,
                errores: [] 
            },
            acciones: 'SET_LOGIN',
        });
    }
    return(
        <UsuarioContext.Provider value={{
            usuario: estado.usuario,
            token: estado.token,
            msj: estado.msj,
            getUser,
            setLogin
        }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}
export default UsuarioState;
