import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import React from 'react'
import mastery1 from '../assets/mastery/1.png'
import mastery2 from '../assets/mastery/2.png'
import mastery3 from '../assets/mastery/3.png'
import mastery4 from '../assets/mastery/4.png'
import mastery5 from '../assets/mastery/5.png'
import mastery6 from '../assets/mastery/6.png'
import mastery7 from '../assets/mastery/7.png'


const ChampCardMastery = ({ data, accountData}) => {
    const animatedValue = useSharedValue(0);

    const masteryImage = (data) => {
        switch (data) {
            case 1:
                return mastery1
            case 2:
                return mastery2
            case 3:
                return mastery3
            case 4:
                return mastery4
            case 5:
                return mastery5
            case 6:
                return mastery6
            case 7:
                return mastery7
            default:
                return mastery1
        }
    } 
    const dateLastTimePlayed = new Date(accountData.lastPlayTime);

    const championDetails = () => {
        animatedValue = 1
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }],
        };
    });

    return (
        <TouchableHighlight onPress={championDetails}>
            <View style={styles.container}>
                <Image style={styles.imgBackground} source={{uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`}}/>
                <Image style={styles.image} source={{uri: `http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${data.id}.png`}}/>
                <View style={styles.dataText}> 
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.dataAcc}>Puntos:<Text style={{fontWeight: 'bold'}}> {accountData.championPoints}</Text></Text>
                    <Text>Ultima vez jugado: {dateLastTimePlayed.getDate()}/{dateLastTimePlayed.getMonth()}/{dateLastTimePlayed.getFullYear()}</Text>
                </View>
                <Image style={styles.masteryLevel} source={masteryImage(accountData.championLevel)}/>
            </View>
        </TouchableHighlight>
    )
}



export default ChampCardMastery

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: windowWidth*.85,
        height: 100,
        alignItems: 'center',
        backgroundColor: '#DEDEFF',
        marginVertical: 10,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#659dfc',
        borderWidth: 2,
        elevation: 10
    },
    image: {
        width: 75,
        height: 75,
        marginLeft: 12.5,
        borderRadius: 5
    },
    imgBackground: {
        width: windowWidth*.85,
        height: 100,
        position: 'absolute',
        opacity: 0.4,
        borderRadius: 10

    },
    masteryLevel: {
        position: 'absolute',
        height: 50,
        width: 50,
        bottom: 7,
        right: 7,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 7
    },
    dataAcc: {
        fontSize: 14
    },
    dataText: {
        marginLeft: 10,
        height: 75,
        justifyContent: 'flex-start'
    }
})