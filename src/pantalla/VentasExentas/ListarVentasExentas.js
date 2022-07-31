import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Axios from '../../componentes/Axios';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';
import CardVentasExentas from '../../componentes/CardVentasExentas';


export default function ListarVentasExentas() {
    const [ventasexentas, setVentasExentas] = useState("");
    var jsonList;
    const { token } = useContext(UsuarioContext);
    const titulo = 'Lista Ventas Exentas'
    var textoMensaje = "";


    useEffect(() => {
        MostrarVentasExentas();
    }, [setVentasExentas]);


    const VentasExentasRender = ({ item }) => {

        return (
            <CardVentasExentas numerofactura={'Numero de Factura: ' + item.numerofactura} numero_orden={'Numero de Orden: ' + item.numero_orden} />

        );
    };

    const MostrarVentasExentas = async () => {

        if (!token) {
            textoMensaje = "Debe iniciar sesion";
        }
        else {
            try {
                await Axios.get('exentas/listar', {


                })
                    .then((data) => {
                        setVentasExentas(data.data);
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
                        data={ventasexentas}
                        renderItem={VentasExentasRender}
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