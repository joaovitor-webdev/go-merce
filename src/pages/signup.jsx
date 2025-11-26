import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrepper from '../components/ScreenWrepper'
import { MaterialIcons } from '@expo/vector-icons'
import Icons from '../components/icons'
import { theme } from '../global/themes'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { hp, wp } from '../global/helpers'
import Input from '../components/Input'
import Button from '../components/button'
import { useNavigation } from 'expo-router'

const Signup = () => {

    const navigation = useNavigation()

    const nameRef = useRef('')
    const passwordRef = useRef('')
    const emailRef = useRef('')
    const [loading, setLoading] = useState(false)

    function onSubmit() {
        try {
            setLoading(true)
            if (!nameRef.current || !passwordRef.current || !emailRef.current) {
                setLoading(false)
                return Alert.alert("Atenção", "Campos vazios! Preencha-os")
            } else {
                setTimeout(() => {
                    navigation.navigate('BottomRoutes')
                }, 3000)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


    // const onSubmit = () => {

    // }

    return (
        <ScreenWrepper>
            <StatusBar style='auto' />
            <View style={styles.container}>
                <BackButton />
                <View>
                    <Text style={styles.welcomeText}>Olá!</Text>
                    <Text style={styles.welcomeText}>Vamos começar!</Text>
                </View>
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(2), color: theme.colors.textDark }}>Crie sua conta para continuar</Text>
                    <Input onChangeText={value => nameRef.current = value} placeholder={'Digite seu nome'} placeholderTextColor={theme.colors.dark} autoCorrect={false} spellCheck={false} autoCapitalize={"none"} autoComplete={"name"} textContentType={"name"} keyboardType={'default'} nameIcon={'account-box'} sizeIcon={25} colorIcon={theme.colors.dark} />
                    <Input onChangeText={value => emailRef.current = value} placeholder={'Digite seu e-mail'} placeholderTextColor={theme.colors.dark} autoCorrect={false} spellCheck={false} autoCapitalize={"none"} autoComplete={"e-mail"} textContentType={"e-mail"} keyboardType={'default'} nameIcon={'email'} sizeIcon={25} colorIcon={theme.colors.dark} />
                    <Input onChangeText={value => passwordRef.current = value} secureTextEntry={true} placeholder={'Digite sua senha'} placeholderTextColor={theme.colors.dark} autoCorrect={false} spellCheck={false} autoCapitalize={"none"} autoComplete={"username"} textContentType={'password'} keyboardType={'default'} nameIcon={'visibility'} sizeIcon={25} colorIcon={theme.colors.dark} />
                    <Button title={'Criar conta'} loading={loading} onPress={onSubmit} />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Já tem uma conta?</Text>
                    <Pressable onPress={() => navigation.navigate('login')}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>Entre aqui!</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrepper>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.textDark,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.textDark
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.textDark,
        fontSize: hp(2.3)
    }
})