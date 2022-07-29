import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Login from "./Login";

import Stack from "./Stack";


import Cai from "./Cai/PantallaCai";
import Clientes from "./Clientes/PantallaClientes";
import ClientesDirecciones from "./ClientesDirecciones/PantallaClientesDirecciones";

import DetalleVentas from "./DetalleVentas/PantallaDetalleVentas";
import Ventas from "./Ventas/PantallaVentas";
import Anuladas from "./VentasAnuladas/PantallaVentasAnuladas";
import Constancia from "./VentasConstancia/PantallaVentasConstancia";
import Exentas from "./VentasExentas/PantallaVentasExentas";
import Sag from "./VentasSag/PantallaVentasSag";

import PantallaEstaciones from "./Estaciones/PantallaEstaciones";
import PantallaProductos from "./Productos/PantallaProductos";
import PantallaVentasPos from "./VentasPos/PantallaVentasPos";
import PantallaDetallePedido from "./DetallePedido/PantallaDetallePedido";
import PantallaPedido from "./Pedido/PantallaPedido";
import PantallaPos from "./Pos/PantallaPos";
import PantallaUsuarios from "./Usuarios/PantallaUsuarios";
import PantallaEmpleados from "./Empleados/PantallaEmpleados";

import ListarVentasPos from "./VentasPos/ListarVentasPos";
import ListarVentasSag from "./VentasSag/ListarVentasSag";
import ListarVentasExentas from "./VentasExentas/ListarVentasExentas";
import ListarVentasConstancia from "./VentasConstancia/ListarVentasConstancia";
import ListarVentasAnuladas from "./VentasAnuladas/ListarVentasAnuladas";
import ListarVentas from "./Ventas/ListarVentas";
import ListarDetalleVentas from "./DetalleVentas/ListarDetalleVentas";
import ListarClientesDirecciones from "./ClientesDirecciones/ListarClientesDirecciones";
import ListarClientes from "./Clientes/ListarClientes";
import ListarCai from "./Cai/ListarCai";


const Tab = createBottomTabNavigator();
const PantallasModulo = createNativeStackNavigator();

function MyTab() {
        return (
                <Tab.Navigator
                        initialRouteName="Login"
                >
                        <Tab.Screen name="Modulo de Ventas" component={Pantallas}
                                options={{
                                        tabBarActiveTintColor: 'black'
                                }}
                        />

                </Tab.Navigator>
        );
}

export default function Navigation() {
        return (
                <NavigationContainer>
                        <MyTab />
                </NavigationContainer>
        );
}

function Pantallas() {
        return (
                <PantallasModulo.Navigator
                        initialRouteName="Login"
                >
                        <PantallasModulo.Screen
                                name="Stack"
                                component={Stack}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Login"
                                component={Login}
                        ></PantallasModulo.Screen>






                        <PantallasModulo.Screen
                                name="Cai"
                                component={Cai}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Clientes"
                                component={Clientes}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Direcciones"
                                component={ClientesDirecciones}
                        ></PantallasModulo.Screen>







                        <PantallasModulo.Screen
                                name="Detalle Ventas"
                                component={DetalleVentas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Ventas"
                                component={Ventas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Ventas Anuladas"
                                component={Anuladas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Ventas Constancia"
                                component={Constancia}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Ventas Exentas"
                                component={Exentas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Ventas Sag"
                                component={Sag}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaVentasPos"
                                component={PantallaVentasPos}
                        ></PantallasModulo.Screen>





                        

                        <PantallasModulo.Screen
                                name="PantallaEstaciones"
                                component={PantallaEstaciones}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaProductos"
                                component={PantallaProductos}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaDetallePedido"
                                component={PantallaDetallePedido}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaPedido"
                                component={PantallaPedido}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="Productos"
                                component={PantallaProductos}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaPos"
                                component={PantallaPos}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaUsuarios"
                                component={PantallaUsuarios}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="PantallaEmpleados"
                                component={PantallaEmpleados}
                        ></PantallasModulo.Screen>

                        






                        <PantallasModulo.Screen
                                name="ListarVentasPos"
                                component={ListarVentasPos}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarVentasSag"
                                component={ListarVentasSag}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarVentasExentas"
                                component={ListarVentasExentas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarVentasConstancia"
                                component={ListarVentasConstancia}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarVentasAnuladas"
                                component={ListarVentasAnuladas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarVentas"
                                component={ListarVentas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarDetalleVentas"
                                component={ListarDetalleVentas}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarClientesDirecciones"
                                component={ListarClientesDirecciones}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarClientes"
                                component={ListarClientes}
                        ></PantallasModulo.Screen>

                        <PantallasModulo.Screen
                                name="ListarCai"
                                component={ListarCai}
                        ></PantallasModulo.Screen>



                </PantallasModulo.Navigator>
        );
}