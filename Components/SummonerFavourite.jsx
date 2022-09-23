import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FavAccountContext from '../Context/FavAccountContext';
import { getChampMastery } from '../Utils/LolApiHelpers';
import axios from "axios"
import { useNavigation } from '@react-navigation/native';

const baseUrl = 'https://la2.api.riotgames.com/lol'
const API_KEY = 'RGAPI-bafb4b8d-18af-4c2f-981c-278161d16e4e'
const SummonerFavourite = ({ data }) => {
    const { deleteAccount, favAccounts } = useContext(FavAccountContext)
    const navigation = useNavigation(); 

    const LogChampMastery = async () => {
        await axios.get(`${baseUrl}/champion-mastery/v4/champion-masteries/by-summoner/${data.id}?api_key=${API_KEY}`)
        .then(
            function(response){
                navigation.navigate("ProfileDetail", {masteryData: response.data})
            }
        )
        .catch(error => console.log(error))
    }

    const FavProfile = () => {
        deleteAccount(data)
    }

    return (
            <TouchableWithoutFeedback onPress={LogChampMastery}>
                <View style={styles.container}>
                        <>
                            <Image style={styles.imageIcon} source={{uri: `https://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/${data.profileIconId}.png`}} />
                            <View style={styles.allText}>
                                <Text style={styles.name}>{data.name}</Text>
                                <Text>Nivel: {data.summonerLevel}</Text>
                                <Text>{data.profileIconId}</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={ FavProfile }>
                                <Ionicons style={styles.star} name={'star'} color='#f2c935' size={24} /> 
                            </TouchableWithoutFeedback>
                        </>
                </View>
            </TouchableWithoutFeedback>
    )
}

export default SummonerFavourite

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 30,
        backgroundColor: '#fafafa',
        borderRadius: 10,
        marginVertical: 5
    }, 
    imageIcon: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    allText: {
        padding: 10,
    },
    name: {
        fontSize: 20
    },
    star:{
        position: 'absolute',
        top: 10,
        right: 15
    }
})