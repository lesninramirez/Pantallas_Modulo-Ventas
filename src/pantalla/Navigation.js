import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Login from "./Login";

import Stack from "./Stack";


import Cai from "./Cai/AgregarCai";
import Clientes from "./Clientes/AgregarClientes";
import ClientesDirecciones from "./ClientesDirecciones/AgregarClientesDirecciones";

import DetalleVentas from "./DetalleVentas/PantallaDetalleVentas";
import Ventas from "./Ventas/PantallaVentas";
import Anuladas from "./VentasAnuladas/PantallaVentasAnuladas";
import Constancia from "./VentasConstancia/PantallaVentasConstancia";
import Exentas from "./VentasExentas/PantallaVentasExentas";
import Sag from "./VentasSag/AgregarVentasSag";

import PantallaEstaciones from "./Estaciones/PantallaEstaciones";
import PantallaProductos from "./Productos/PantallaProductos";
//import PantallaVentasPos from "./PantallaPos";
import PantallaDetallePedido from "./DetallePedido/PantallaDetallePedido";
import PantallaPedido from "./Pedido/PantallaPedido";
import PantallaPos from "./Pos/PantallaPos";
import EditarCai from "./Cai/EditarCai";
import EditarClientesDirecciones from "./ClientesDirecciones/EditarClientesDirecciones";
import EditarCliente from "./Clientes/EditarCliente";

//import Empleados from "./PantallaEmpleados";
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

            <PantallasModulo.Screen
                    name="Productos"
                    component={PantallaProductos}
            ></PantallasModulo.Screen> 

            <PantallasModulo.Screen
                    name="PantallaPos"
                    component={PantallaPos}
            ></PantallasModulo.Screen> 
            
            <PantallasModulo.Screen
                    name="EditarCai"
                    component={EditarCai}
            ></PantallasModulo.Screen> 

              <PantallasModulo.Screen
                    name="EditarClientesDirecciones"
                    component={EditarClientesDirecciones}
            ></PantallasModulo.Screen> 

            <PantallasModulo.Screen
                    name="EditarCliente"
                    component={EditarCliente}
            ></PantallasModulo.Screen> 

             
  

        </PantallasModulo.Navigator>
    );
}