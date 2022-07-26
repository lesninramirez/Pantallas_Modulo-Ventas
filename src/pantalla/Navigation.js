import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Login from "./Login";

import Stack from "./Stack";


import Cai from "./PantallaCai";
import Clientes from "./PantallaClientes";
import ClientesDirecciones from "./PantallaClientesDirecciones";

import DetalleVentas from "./PantallaDetalleVentas";
import Ventas from "./PantallaVentas";
import Anuladas from "./PantallaVentasAnuladas";
import Constancia from "./PantallaVentasConstancia";
import Exentas from "./PantallaVentasExentas";
import Sag from "./PantallaVentasSag";

import PantallaEstaciones from "./PantallaEstaciones";
import PantallaProductos from "./PantallaProductos";
//import PantallaVentasPos from "./PantallaPos";
import DetallePedido from "./PantallaDetallePedido";
import PantallaDetallePedido from "./PantallaDetallePedido";
import PantallaPedido from "./PantallaPedido";


//import Empleados from "./PantallaEmpleados";

//import Pos from "./PantallaPos";
//import Usuarios from "./PantallaUsuarios";


const Tab = createBottomTabNavigator();
const PantallasModulo= createNativeStackNavigator();

function MyTab() {
    return (
        <Tab.Navigator
            initialRouteName="Login"
        >
            <Tab.Screen name="Modulo de Ventas" component={Pantallas}
                options={{ tabBarActiveTintColor: 'black'          
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
  

        </PantallasModulo.Navigator>
    );
}