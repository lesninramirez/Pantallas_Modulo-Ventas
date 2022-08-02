import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Axios from './src/componentes/Axios';
import UsuarioState from './src/contexto/UsuarioState';

import Pantallas from './src/componentes/Pantallas';

import Navigation from './src/pantalla/Navigation';

export default function App() {

    return(
      <UsuarioState>
      <Navigation>
        <Pantallas>
          
        </Pantallas>
      </Navigation>
      </UsuarioState>
    )
}