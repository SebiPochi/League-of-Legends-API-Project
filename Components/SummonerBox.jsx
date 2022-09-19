import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback} from 'react-native'
import React, { useState, useEffect, useContext, useLayoutEffect, useRef } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FavAccountContext from '../Context/FavAccountContext'

const SummonerBox = ({ data, isOnFavourites }) => {
    const { addAccount, deleteAccount } = useContext(FavAccountContext)
    const [isFaved, setIsFaved] = useState(isOnFavourites)
    
    useEffect(() => {
        setIsFaved(isOnFavourites)
    }, [])

    const FavProfile = () => {
        setIsFaved(!isFaved)
        if (!isFaved) {
            addAccount(data)
            console.log('estoy addeaddd');
        } else {
            deleteAccount(data)
            console.log('estoy deleteeadndo');
        }
    }
    

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <>
                    <Image style={styles.imageIcon} source={{uri: `https://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/${data.profileIconId}.png`}} />
                    <View style={styles.allText}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text>Nivel: {data.summonerLevel}</Text>
                        <Text>{data.profileIconId}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={ FavProfile }>
                        <Ionicons style={styles.star} name={isFaved ? 'star' : 'star-outline'} color='#f2c935' size={24} /> 
                    </TouchableWithoutFeedback>
                </>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default SummonerBox

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 30,
        backgroundColor: '#fafafa',
        borderRadius: 10,
        marginTop: 30
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