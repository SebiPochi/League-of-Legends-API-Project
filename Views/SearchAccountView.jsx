import { FlatList, StyleSheet, Text, TextInput, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import ItemList from '../Components/ItemList'
import SummonerBox from '../Components/SummonerBox'
import { SearchBar, Button } from '@rneui/themed';
import InfoText from '../Components/InfoText'
import { useContext } from 'react'
import FavAccountContext from '../Context/FavAccountContext'

const SearchAccountView = () => {
    const { isTheAccountOn } = useContext(FavAccountContext)
    const [data, setData] = useState({})
    const [error, setError] = useState([])
    const [textValue, setTextValue] = useState("")
    const [isTheAccountFav, setIsTheAccountFav] = useState(false)
    const API_KEY = 'RGAPI-ceac742e-c4c9-4f36-a157-17b0e8ea451d' //?api_key=
    const baseUrl = '.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
    // https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Arcessam?api_key=RGAPI-1069f2b6-48af-4af4-89d1-754836d97b6c
    
    const BuscarInvocador = async() => {
        try {
            const response = await axios.get(`https://la2${baseUrl}${textValue}?api_key=${API_KEY}`)
            setIsTheAccountFav(isTheAccountOn(response.data))
            setData(response.data)
            setError([])
        }
        catch (error){
            setError(error)
            setData([])
            console.log(error);
        }
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return (
    <View>
        <SearchBar
            onChangeText={(value) => setTextValue(value)}
            value={textValue}
        />
        <Button color='#659dfc' title='Buscar' onPress={BuscarInvocador} />
        {
            !isEmpty(error) ? (
                error.type === 404 ? (
                    <InfoText text={`ERROR ${error.type}: Hubo un problema con la busqueda`}/>
                ) : (
                    <InfoText text={'No se ha encontrado ningún invocador con este nombre'}/>
                )
            ) : (
                    !isEmpty(data) ? (
                        <>
                            <SummonerBox data={data} isOnFavourites={isTheAccountFav}/>
                        </>
                    ) : (
                        
                        <InfoText text={'Busca un Invocador con la barra de arriba'}/>
                    ) 
                )
            

        }
        
        {/* <FlatList
            data={data}
            renderItem={ItemList}
            keyExtractor={}
        /> */}
    </View>
  )
}

export default SearchAccountView

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row'
    },
    infoText: {

    }
})