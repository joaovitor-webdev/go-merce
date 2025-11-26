import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Icons = ({color, size, name}) => {
  return (
    <View>
      <MaterialIcons name={name} color={color} size={size} />
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({})