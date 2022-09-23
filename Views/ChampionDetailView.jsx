import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';

const ChampionDetailView = ({ route }) => {
    const { dataChampion } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.imageBG} source={{uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${dataChampion.id}_0.jpg`}}/>
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)' ]}
                style={styles.background}
            >
            </LinearGradient>
            
            <View marginLeft={20}>
                <Text ellipsizeMode='tail' style={styles.title}>{dataChampion.name}, {dataChampion.title}</Text>
                <Text style={styles.description}>{dataChampion.blurb}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginVertical: 10}}>
                {
                    dataChampion.tags.map((tag) => {
                        return (
                            <Text style={styles.tag} key={tag}>{tag}</Text>
                        )
                    })
                }
            </View>
            <View style={{width: windowWidth, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.dataText}>Ataque, {dataChampion.info.attack}</Text>
                <Progress.Bar color="#659dfc" progress={dataChampion.info.attack*.1} height={8} width={windowWidth*.8} />
                <Text style={styles.dataText}>Defensa, {dataChampion.info.defense}</Text>
                <Progress.Bar color="#659dfc" progress={dataChampion.info.defense*.1} height={8} width={windowWidth*.8} />
                <Text style={styles.dataText}>Dificultad, {dataChampion.info.difficulty}</Text>
                <Progress.Bar color="#659dfc" progress={dataChampion.info.difficulty*.1} height={8} width={windowWidth*.8} />
                <Text style={styles.dataText}>Magia, {dataChampion.info.magic}</Text>
                <Progress.Bar color="#659dfc" progress={dataChampion.info.magic*.1} height={8} width={windowWidth*.8} />
            </View>
        </View>
    )
}

export default ChampionDetailView

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    imageBG: {
        width: windowWidth,
        height: 300,
        opacity: .5,
        position: 'absolute'
    },
    background: {
        width: windowWidth,
        height: 300,
        position: 'absolute',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 20,
        width: windowWidth*.8

    },
    description: {
        fontSize: 15,
        width: windowWidth*.87

    },
    tag: {
        backgroundColor: 'rgb(230, 204, 255)',
        fontSize: 14,
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        fontWeight: 'bold',    
    },
    dataText: {
        alignSelf: 'baseline',
        left: 40,
        fontSize: 16,
        marginTop: 20
    }
})