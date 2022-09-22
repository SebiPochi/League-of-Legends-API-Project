import { StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useState } from 'react'
import { getAllChamps } from '../Utils/LolApiHelpers'

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

const ProfileDetailView = ({ route }) => {
  const [allChampData, setAllChampData] = useState([])
  const { masteryData } = route.params;
  const slicedArray = masteryData.slice(0, 4);
  const AllChampions = getAllChamps()

  const isInList = (championId) => {
    for (let prop of AllChampions) {
      if (championId === AllChampions[prop].key) {
        return true
      }
    }
    return false
  }

  return (
    <View style={styles.container}>
      <Text>{slicedArray[1].championId}</Text>
      {
        slicedArray.map((champDetail) => (
          <Text>{champDetail.championId}</Text>
        ))
      }
      {
        slicedArray.forEach((champMastery => (
          isInList(champMastery.championId) ? (
              <Text>ESTA EN LALI ISIII</Text>
            ) : (
              <Text>NO ESTA EN LALI</Text>
          )
        )))
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