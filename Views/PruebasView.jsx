import React, { useEffect, useState, useMemo } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import ItemList from '../Components/ItemList';
import axios from 'axios'
import { apiCallRiot } from '../Axios/RiotGamesApiCall';

const PruebasView = () => {
    const [data, setData] = useState([])
  
    const baseUrl = 'https://static.developer.riotgames.com/docs/lol'
  
    useEffect(async() => {
      const response = await axios.get(`${baseUrl}/gameModes.json`)
      setData(response.data)
    }, [])

    const renderItem = ({ item }) => (
        <ItemList name={item.gameMode} description={item.description}/>
      );

    return (
      <>
        <View style={styles.container}>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.gameMode}
          />
        </View>
            <Text>Tukidddddddddddddd</Text>
      </>
  )
}

export default PruebasView

const styles = StyleSheet.create({})