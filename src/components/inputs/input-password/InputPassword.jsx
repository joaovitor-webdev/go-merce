import { View, Text, Pressable, TextInput, Platform } from 'react-native'
import React, { forwardRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { style } from './styles'
import { theme, theme } from '../../../global/themes'

export const InputPassword = forwardRef(({ value, onChangeText }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={style.inputPassword}>
            <Text style={style.lablePassword}>Senha</Text>
            <View style={style.passwordContainer}>
                <TextInput
                    key={isPasswordVisible ? 'pwd-visible' : 'pwd-hidden'}
                    placeholder="Digite sua senha"
                    placeholderTextColor={theme.colors.dark}
                    style={style.passwordInput}
                    secureTextEntry={!isPasswordVisible}
                    value={value}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    spellCheck={false}
                    autoCapitalize="none"
                    autoComplete={isPasswordVisible ? 'off' : 'password'}
                    textContentType={isPasswordVisible ? 'none' : 'password'}
                    importantForAutofill={isPasswordVisible ? 'no' : 'yes'}
                    keyboardType={Platform.OS === 'android' && isPasswordVisible ? 'visible-password' : 'default'}
                />
                <Pressable onPress={() => setIsPasswordVisible(prev => !prev)}>
                    <MaterialIcons name={isPasswordVisible ? 'visibility' : 'visibility-off'} size={14} color={theme.colors.light} />
                </Pressable>
            </View>
        </View>
    )
})