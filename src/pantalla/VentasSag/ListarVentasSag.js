import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardVentasSag from '../../componentes/CardVentas.Sag';


export default function ListarVentasSag() {
    const [ventassag, setVentasSag] = useState("");
    const { token } = useContext(UsuarioContext);
    const titulo = 'Lista Ventas Sag'
    var textoMensaje = "";


    useEffect(() => {
        MostrarVentasSag();
    }, []);


    const VentasSagRender = ({ item }) => {

        return (
            <CardVentasSag numFactura={'Numero de Factura: ' + item.numFactura} numero_sag={'Numero Sag: ' + item.numero_sag} />

        );
    };

    const MostrarVentasSag = async () => {

        if (!token) {
            textoMensaje = "Debe iniciar sesion";
        }
        else {
            try {
                await Axios.get('VentasSag/listar', {


                })
                    .then((data) => {

                        setVentasSag(data.data);

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
                        data={ventassag}
                        renderItem={VentasSagRender}
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