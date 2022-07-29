import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardVentasConstancia from '../../componentes/CardVentasConstancia';


export default function ListarVentasConstancia() {
    const [ventascon, setVentasCon] = useState("");
    const { token } = useContext(UsuarioContext);
    const titulo = 'Lista Ventas Sag'
    var textoMensaje = "";


    useEffect(() => {
        MostrarVentasCon();
    }, []);


    const VentasConRender = ({ item }) => {

        return (
            <CardVentasConstancia numero_factura={'Numero de Factura: ' + item.numero_factura} numero_constancia={'Numero Constancia: ' + item.numero_constancia} />

        );
    };

    const MostrarVentasCon = async () => {

        if (!token) {
            textoMensaje = "Debe iniciar sesion";
        }
        else {
            try {
                await Axios.get('constancia/listar', {


                })
                    .then((data) => {

                        setVentasCon(data.data);

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
                        data={ventascon}
                        renderItem={VentasConRender}
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