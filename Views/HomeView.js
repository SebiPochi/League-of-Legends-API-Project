import { Button, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import FavAccountContext from '../Context/FavAccountContext'
import SummonerBox from '../Components/SummonerBox'
import SummonerFavourite from '../Components/SummonerFavourite'
import InfoText from '../Components/InfoText'
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeView = ({ navigation }) => {
    const { favAccounts } = useContext(FavAccountContext)
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cuentas Favoritas</Text>
                {
                    favAccounts ? (
                        favAccounts.map((account) => {
                        return (
                            <SummonerFavourite 
                                data={account}
                                key={account.name}
                            />
                        )
                    })
                    ) : (
                        <InfoText text={'No tenes ningun invocador como favorito. ¡Agrega uno!'}/>
                    )
                }
            {/* <Button title='Modos de juego' onPress={() => navigation.navigate('Pruebas')} /> */}
            {/* <Button title='BORRAR TODO' onPress={deleteAllAccounts}/> */}
            <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('SearchAccount')}>
                <Ionicons name={'search'} color='blue' size={40} /> 
            </TouchableOpacity>
            {/* <Button title='Buscar Invocador' onPress={() => navigation.navigate('SearchAccount')} /> */}
        </View>
    )
}

export default HomeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        fontSize: 20,
        marginLeft: 20,
        marginVertical: 20,
        fontWeight: 'bold'
    },
    search: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        padding: 20,
        borderRadius: 558,
        backgroundColor: '#fff'
    }
})