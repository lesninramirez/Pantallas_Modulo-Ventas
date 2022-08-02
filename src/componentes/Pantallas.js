import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pantalla/Login';
import MenuTab from '../pantalla/Stack';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from '../componentes/Cargando';


const Stack = createNativeStackNavigator();

const Pantallas = () => {
    const { token, setDatos, sesionIniciada, tokenValidado } = React.useContext(UsuarioContext);
    const [inciarAplicacion, setIniciarAplicacion] = React.useState(false);

    React.useEffect(() => {
        setDatos();
        setIniciarAplicacion(true);
    }, [])
    if (inciarAplicacion) {

        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {sesionIniciada ? (
                    <>
                        <Stack.Screen name="Stack" component={MenuTab} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                    </>
                )
                }
            </Stack.Navigator>
        );

    }
    else {
        return <Cargando texto="Cargando aplicación"/>;
    }

}
export default Pantallas;