import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icons from './icons'
import { hp } from '../global/helpers'
import { theme } from '../global/themes'

const Input = ({
    key,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    value,
    onChangeText,
    autoCorrect,
    spellCheck,
    autoCapitalize,
    autoComplete,
    textContentType,
    importantForAutofill,
    keyboardType,
    onPress,
    nameIcon,
    colorIcon, 
    sizeIcon

}) => {
    return (
        <View style={styles.container}>
            <TextInput style={{flex:1}} placeholder={placeholder} placeholderTextColor={placeholderTextColor} secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText} autoCorrect={autoCorrect} spellCheck={spellCheck} autoCapitalize={autoCapitalize} autoComplete={autoComplete} key={key} keyboardType={keyboardType} textContentType={textContentType} importantForAutofill={importantForAutofill} />
            <Pressable onPress={onPress}>
                <Icons name={nameIcon} color={colorIcon} size={sizeIcon}/>
            </Pressable>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height: hp(7.4),
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.4,
        borderColor:theme.colors.textDark,
        borderRadius:theme.radius.xxl,
        borderCurve:'continuous',
        paddingHorizontal:18,
        gap:12,
    }
})