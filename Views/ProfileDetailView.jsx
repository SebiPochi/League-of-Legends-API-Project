import { StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { getAllChamps, getChampDetails } from '../Utils/LolApiHelpers'

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
    return myChamp ? myChamp.name : "FALOPAAA"
  }

  return allChampData && (
    <View style={styles.container}>
      <Text>{champTopFive[1].championId}</Text>
      {
        champTopFive.map((champDetail) => (
          <Text>{champDetail.championId}</Text>
        ))
      }
      {
        champTopFive.map((champMastery => {
          const champName = isInList(champMastery.championId)
          const champData = getChampDetails(champName)
          console.log(champData)
          return champData &&(
              <Text key={champName}>{champName}</Text>
          )
        }))
      }
    </View>
  )
}

export default ProfileDetailView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})