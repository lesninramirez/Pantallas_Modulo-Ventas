import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from './src/componentes/Axios';
import UsuarioState from './src/contexto/UsuarioState';

import Login from './src/pantalla/Login';

import Navigation from './src/pantalla/Navigation';

export default function App() {

    return(
      <UsuarioState>
      <Navigation>
        <Login/>
      </Navigation>
      </UsuarioState>
    )
}