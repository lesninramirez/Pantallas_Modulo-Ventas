import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardVentasAnuladas from '../../componentes/CardVentasAnuladas';


export default function ListarVentasAnuladas() {
    const [ventasanuladas, setVentasAnuladas] = useState("");
    var jsonList;
    const { token } = useContext(UsuarioContext);
    const titulo = 'Lista Ventas Anuladas'
    var textoMensaje = "";


    useEffect(() => {
        MostrarVentasAnuladas();
    }, []);


    const VentasAnuladasRender = ({ item }) => {

        return (
            <CardVentasAnuladas id_usuario={'Id del usuario: ' + item.id_usuario} descripcion={'Descripcion: ' + item.descripcion}
            fechahora={'Fecha y Hora: ' + item.fechahora} />

        );
    };

    const MostrarVentasAnuladas = async () => {

        if (!token) {
            textoMensaje = "Debe iniciar sesion";
        }
        else {
            try {
                await Axios.get('anuladas/listar', {


                })
                    .then((data) => {
                        setVentasAnuladas(data.data);
                        console.log(jsonList);

                    })
                    .catch((error) => {

                    });
            } catch (error) {

            }
        }
    }




    return (
        <ScrollView >
            <View style={styles.contenedor}>

                <View style={styles.contenedorFlat}>
                    <FlatList
                        data={ventasanuladas}
                        renderItem={VentasAnuladasRender}
                    >
                    </FlatList>

                </View>
            </View>

        </ScrollView>


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
    contenedorFlat: {
        flex: 1,
        padding: 10,
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
    },
});