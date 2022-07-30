import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import Axios from '../../componentes/Axios';
import Mensaje from '../../componentes/Mensaje';
import { useNavigation } from '@react-navigation/native';

const EditarCai = () => {

  const navigation= useNavigation();
  const [cai, setCai] = useState("");
  const [ fecha_limite, setLimite] = useState("");
  const [numero_ini, setNumini] = useState("");
  const [numero_fin, setNumfin] = useState("");
  const [activoCai, setActivo] = useState("");
  const [idCai, setidCai] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: " ", value: " " }]);
  var textoMensaje = "";

  useEffect(() => {
    MostrarCai();
  }, [setItems]);

  const MostrarCai = async () => {

   /* if (!token) {
      textoMensaje = "Debe iniciar sesion";
    }
    else {*/
      try {
        await Axios.get('cai/listar', {

        })
          .then((data) => {
            const json = data.data;
            let jsonitems = [];
            json.forEach((element) => {
                jsonitems.push({
                  label: element.idregistro.toString(),
                  value: element.idregistro.toString(),
                });
                console.log(typeof element.idregistro.toString());
              });
              setItems(jsonitems);
          })
          .catch((error) => {
            textoMensaje = error;
            Mensaje({ titulo: "Error en el registro", msj: textoMensaje });
          });
      } catch (error) {
        textoMensaje = error;
        console.log(error);
        Mensaje({ titulo: "Error en el registro", msj: error });
      }
    //}
  };

  const modificarCai = async () => {

      await Axios.put('/cai/editar/?idCai=' + idCai,{
        cai: cai,
        fecha_limite: fecha_limite,
        numero_ini: numero_ini,
        numero_fin: numero_fin,
        activoCai: activoCai
      }
      ).then((respuesta)=>{
        console.log(respuesta.data);
        Mensaje({
          titulo: "Registro Cai",
          msj: "Su registro fue guardado con exito",
        });
      }).catch((error)=>{
        console.log(error);
      });
  };

    return (
       
    <View style={styles.contenedor}>
    <ScrollView >  
    <View style={styles.contenedorLogin}>
      <View style={[styles.contenedorControles, styles.sombraControles]}>
        <View style={styles.controles}>
        <DropDownPicker
            searchable={true}
            style={styles.dropdown}
            placeholder="Seleccione un id de Cai"
            open={open}
            value={value}
            //onSelectItem={setCliente}
            onChangeValue={(value) => {
              setidCai(value);
            }}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <TextInput
            placeholder="Ingrese el Codigo Cai"
            style={styles.entradas}
            value={cai}
            onChangeText={setCai}
            autoFocus={false}
          >
          </TextInput>

          <TextInput
            placeholder="Fecha Limite / AAAA-MM-DD"
            style={styles.entradas}
            value={fecha_limite}
            onChangeText={setLimite}
            //keyboardType='number-pad'
            maxLength={10}
          >
          </TextInput>

          <TextInput
            placeholder="Ingrese el Numero Inicial"
            style={styles.entradas}
            value={numero_ini}
            onChangeText={setNumini}
            keyboardType='decimal-pad'

          >
          </TextInput>

          <TextInput
            placeholder="Ingrese el Numero Final"
            style={styles.entradas}
            value={numero_fin}
            onChangeText={setNumfin}
            keyboardType='decimal-pad'
          >
          </TextInput>

          <TextInput
            placeholder="Activo o Inactivo"
            style={styles.entradas}
            value={activoCai}
            onChangeText={setActivo}
           // editable={false}
          >
          </TextInput>

        </View>

        <View style={styles.contenedorBotonesRedes}>
          <View style={styles.botonRedes}>
            <Button
              title="Guardar"
             onPress={modificarCai}
            ></Button>
          </View>

          <View style={styles.botonRedes}>
            <Button
              title="Cancelar" color={"#FF7D00"}
              onPress={() => navigation.navigate("Cai")}
            ></Button>
          </View>

        </View>

      </View>
    </View>
    </ScrollView>    
  </View>
  );
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
  contenedorscroll:{
    minHeight: 90,
    height: "50%",
    marginTop: -10,
},
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 990,
    width: 360,
  },
  contenedorTitulo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contenedorControles: {
    flex: 2.5,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 25,
    backgroundColor: "#B7B5B4",
    padding: 4,
  },
  sombraControles: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tituloLogin: {
    color: "#495057",
    fontSize: 40,
    fontWeight: "500",
  },
  controles: {
    flex: 5,
    marginBottom: -5,
    paddingTop: -10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contenedorBotones: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  contenedorBotonesRedes: {
    flex: 2,
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  boton: {
    flex: 1,
    alignItems: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  botonRedes: {
    flex: 1,
    alignItems: "stretch",
    margin: 4,
  },
  entradas: {
    flex: 1,
    alignItems: "stretch",
    margin: 5,
    padding: 10,
    fontSize: 20,
    fontWeight: "400",
    color: "#495057",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ced4da",
    borderRadius: 15,
  },
  dropdown: {
    
    zIndex: 1000
  },
});
export default EditarCai;