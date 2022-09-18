import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ItemList = ({ name, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 5,
      paddingLeft: 10
    },
    title :{
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        fontSize: 16
    }
  });
  