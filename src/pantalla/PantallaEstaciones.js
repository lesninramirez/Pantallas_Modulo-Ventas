import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Axios from '../componentes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';
import Mensaje from '../componentes/Mensaje';
import CardEstaciones from '../componentes/CardEstaciones';


export default function PantallaEstaciones() {
  const [estaciones, setEstaciones] = useState("");
  const [lista, setLista]= useState("");
  var jsonList;
  const {token}= useContext(UsuarioContext);
    const titulo = 'Lista de Estaciones'
    var textoMensaje = "";


    

    useEffect(() => {
      MostrarEstaciones();
  }, [setLista] );




    const EstacionesRender = ({item}) => {
        
        return(
            <CardEstaciones nombre={item.nombre} activo={item.activo} vistaprevia={item.vistaprevia} 
            tecladovirtual={item.tecladovirtual} nombretipo={item.nombretipo} nombreproducto={item.nombreproducto}
            administracion={item.administracion}/>


        );
    };



    const MostrarEstaciones = async () => {


      //console.log(token);
      if (!token) {
        textoMensaje = "Debe iniciar sesion";
    }
    else {
            try {
                await Axios.get('estacion/listar', {
                  
          
                })
                    .then((data) => {

                        setEstaciones(data.data);

                        console.log(lista);

                        /*else {
                            textoMensaje = '';
                            json.errores.forEach(element => {
                                textoMensaje += element.mensaje + '. ';
                            });
                            //Mensaje({ titulo: titulo, msj: textoMensaje });
                        }*/
                    })
                    .catch((error) => {
                        /*textoMensaje = error;
                        Mensaje({ titulo: titulo, msj: textoMensaje });*/
                    });
            } catch (error) {
                /*textoMensaje = error;
                console.log(error);
                Mensaje({ titulo: titulo, msj: error });*/
            }
        }
      }
        //Mensaje({ titulo: titulo, msj: textoMensaje });
      
       
      
  return (




                    
                    <View style= {styles.contenedorBotones}>
                        <FlatList
                            data={estaciones}
                            renderItem={EstacionesRender}
                            /*keyExtractor={item=>item.NumeroEstacion}*/
                            >
                            </FlatList>
                    </View>

              

  )
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
  contenedorscroll:{
    minHeight: 90,
    height: "50%",
    marginTop: -10,
},
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 450,
    width: 360,
  },
  /*contenedorTitulo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },*/
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
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
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
    padding: 5,
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
