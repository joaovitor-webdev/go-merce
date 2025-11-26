import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { style } from './styles'
import { NativeBottomTabView } from '@react-navigation/bottom-tabs/unstable'
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from '../../global/themes'

export default ({ state, navigation }) => {

    const go = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={style.container}>
            <Pressable style={style.tabButton} onPress={() => go('feed')}>
                <MaterialIcons name='home' color={theme.colors.primary} size={35} style={{ opacity: state.index === 0 ? 1 : 0.3, color: theme.colors.primary, fontSize: 35 }} />
            </Pressable>
            <Pressable style={style.tabButton} onPress={() => go('search')}>
                <MaterialIcons name='search' color={theme.colors.primary} size={35} style={{ opacity: state.index === 1 ? 1 : 0.3, color: theme.colors.primary, fontSize: 35 }} />
            </Pressable>
            <Pressable style={style.tabButton} onPress={() => go('addProduct')}>
                <MaterialIcons name='add' color={theme.colors.primary} size={35} style={{ opacity: state.index === 2 ? 1 : 0.3, color: theme.colors.primary, fontSize: 35 }} />
            </Pressable>
            <Pressable style={style.tabButton} onPress={() => go('shoppingCart')}>
                <MaterialIcons name='shopping-cart' color={theme.colors.primary} size={35} style={{ opacity: state.index === 3 ? 1 : 0.3, color: theme.colors.primary, fontSize: 35 }} />
            </Pressable>
            <Pressable style={style.tabButton} onPress={() => go('profile')}>
                <MaterialIcons name='account-circle' color={theme.colors.primary} size={35} style={{ opacity: state.index === 4 ? 1 : 0.3, color: theme.colors.primary, fontSize: 35 }} />
            </Pressable>
        </View>
    )
}