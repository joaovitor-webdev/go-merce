import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from './icons'
import { theme } from '../global/themes'
import { useNavigation } from 'expo-router'

const BackButton = () => {

    const navigation = useNavigation()

  return (
    <Pressable onPress={()=>navigation.goBack()} style={styles.backButton}>
      <Icons name={'keyboard-arrow-left'} size={25} color={theme.colors.dark}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backButton:{
        alignSelf:'flex-start',
        padding:5,
        borderRadius:theme.radius.sm,
        backgroundColor:theme.colors.gray
    }
})