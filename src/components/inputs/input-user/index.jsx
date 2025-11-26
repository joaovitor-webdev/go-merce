import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { style } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { theme, theme } from '../../../global/themes'

export default function InputUser({ value, onChangeText }) {

    return (
        <View style={style.inputUser}>
            <View style={style.userContainer}>
                <MaterialIcons name='account-circle' size={25} color={theme.colors.primary} />
                <TextInput
                    style={style.userInput}
                    placeholder='Digite seu usuário'
                    placeholderTextColor={theme.colors.dark}
                    value={value}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    spellCheck={false}
                    autoCapitalize="none"
                    autoComplete="username"
                    textContentType="username"
                    keyboardType='default'
                />
            </View>
        </View>
    )
}