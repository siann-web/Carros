import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { CarContext } from './CarContext';

export default function CarInputComponent(){
    const { setCarros } = useContext(CarContext)
    const [ marca, setMarca ] = useState('')
    const [ modelo, setModelo ] = useState('')
    const [ alert, setAlert ] = useState(false)

    const addCarro = () => {
        if(marca && modelo){
            setCarros(prevCarros => [...prevCarros, {marca, modelo}])
            setMarca('')
            setModelo('')
        }
        else {
            setAlert(true)
        }
    }

    return(
        <View style={styles.container}>
        <TextInput value={marca} onChangeText={setMarca} placeholder='Marca do Carro'/>
        <TextInput value={modelo} onChangeText={setModelo} placeholder='Modelo do Carro'/>
        <Button title='Adicionar'  onPress={addCarro}/>
        {
            alert &&
            <Text>Dadoso incompletos</Text>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})