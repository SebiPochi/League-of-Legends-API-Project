import { StyleSheet, Text, View, LogBox, Image, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { getAllChamps, getChampDetails } from '../Utils/LolApiHelpers'
import ChampCardMastery from '../Components/ChampCardMastery';
import { Button } from '@rneui/base';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

const ProfileDetailView = ({ route }) => {
  const [allChampData, setAllChampData] = useState([])
  const { masteryData } = route.params;
  
  const champTopFive = masteryData.slice(0, 5);
  
  useEffect(() => {
    (async () => {
      const {data} = await getAllChamps();
      setAllChampData(data)
    })();
  }, [])

  const isInList = (championId) => {
    const champsIds = Object.values(allChampData).map(champ => ({id: parseInt(champ.key), name: champ.id}))
    const myChamp = champsIds.filter(c => c.id === championId)[0]
    
    return myChamp
  }
  
  const champDetails = (idChamp) => {
    for (const [key, value] of Object.entries(allChampData)) {
      if(parseInt(value.key) === idChamp){
        return value
      }
    }
  }
  

  return allChampData && (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mayor Maestria</Text>
      <View style={styles.champMasteryAll}>
        <ScrollView>
          {
            champTopFive.map((champMastery) => {
              const champName = isInList(champMastery.championId)
              const champData = champDetails(champMastery.championId)
              return champData &&(
                <ChampCardMastery key={champData.id} data={champData} accountData={champMastery}/>
              )
            })
          }
          <Button title={'Mas'} color={'#659dfc'}/>
        </ScrollView>
      </View>
    </View>
  )
}

export default ProfileDetailView

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  champMasteryAll: {
    height: windowHeight*.4,
    alignItems: 'center',
    borderTopWidth: 30,
    borderBottomWidth: 30,
    borderColor: 'rgba(255, 255, 255, .1)',
    elevation: 4
  }
})