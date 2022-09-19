import { FlatList, StyleSheet, Text, TextInput, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import ItemList from '../Components/ItemList'
import SummonerBox from '../Components/SummonerBox'
import { SearchBar, Button } from '@rneui/themed';
import InfoText from '../Components/InfoText'
import { useContext } from 'react'
import FavAccountContext from '../Context/FavAccountContext'
import { getSummoner, getChampMastery } from '../Utils/LolApiHelpers'

const SearchAccountView = () => {
    const { isTheAccountOn, API_KEY } = useContext(FavAccountContext)
    const [data, setData] = useState({})
    const [error, setError] = useState([])
    const [textValue, setTextValue] = useState("")
    const [isTheAccountFav, setIsTheAccountFav] = useState(false)

    const BuscarInvocador = async () => {
        try {
            const summonerName = textValue.trim()
            const summoner = await getSummoner(summonerName)
            setIsTheAccountFav(isTheAccountOn(summoner))
            setData(summoner)
            console.log("DATA: ", data);
            setError([])
        }
        catch (error) {
            setError(error)
            setData([])
            console.log(error);
        }
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return (
        <>
            <View>
                <SearchBar
                    onChangeText={(value) => setTextValue(value)}
                    value={textValue}
                />
                <Button color='#659dfc' title='Buscar' onPress={async() => await BuscarInvocador()} />
                {
                    !isEmpty(error) ? (
                        error.type === 404 ? (
                            <InfoText text={`ERROR ${error.type}: Hubo un problema con la busqueda`} />
                        ) : (
                            <InfoText text={'No se ha encontrado ningún invocador con este nombre'} />
                        )
                    ) : (
                        !isEmpty(data) ? (
                            <>
                                <SummonerBox data={data} isOnFavourites={isTheAccountFav} />
                            </>
                        ) : (

                            <InfoText text={'Busca un Invocador con la barra de arriba'} />
                        )
                    )


                }

                {/* <FlatListF
            data={data}
            renderItem={ItemList}
            keyExtractor={}
        /> */}
            </View>
        </>
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