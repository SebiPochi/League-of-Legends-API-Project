import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const InfoText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textData}>{text}</Text>
    </View>
  )
}

export default InfoText

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    textData: {
        backgroundColor: '#fcfcfc',
        borderWidth: 2,
        borderColor: '#659dfc',
        width: windowWidth*.7,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        textAlign: 'center'
    }
})