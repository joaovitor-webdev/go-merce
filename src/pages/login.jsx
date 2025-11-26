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

const Login = () => {

    const navigation = useNavigation()

    const userRef = useRef('')
    const passwordRef = useRef('')
    const [loading, setLoading] = useState(false)

    function onSubmit() {
        try {
            setLoading(true)
            if (!userRef.current || !passwordRef.current) {
                setLoading(false)
                return Alert.alert("Atenção", "Campos vazios! Preencha-os")
            }

            setTimeout(() => {
                if (userRef.current == 'sauble' && passwordRef.current == 'sauble123') {
                    navigation.navigate('BottomRoutes')
                } else {
                    Alert.alert('Usuário não encontrado')
                }
                setLoading(false)
            }, 3000)
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
                    <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
                </View>
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(2), color: theme.colors.textDark }}>Entre na sua conta para continuar</Text>
                    <Input onChangeText={value => userRef.current = value} placeholder={'Digite seu usuário'} placeholderTextColor={theme.colors.dark} autoCorrect={false} spellCheck={false} autoCapitalize={"none"} autoComplete={"username"} textContentType={"username"} keyboardType={'default'} nameIcon={'account-box'} sizeIcon={25} colorIcon={theme.colors.dark} />
                    <Input onChangeText={value => passwordRef.current = value} secureTextEntry={true} placeholder={'Digite sua senha'} placeholderTextColor={theme.colors.dark} autoCorrect={false} spellCheck={false} autoCapitalize={"none"} autoComplete={"username"} textContentType={'password'} keyboardType={'default'} nameIcon={'visibility'} sizeIcon={25} colorIcon={theme.colors.dark} />
                    <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                    <Button title={'Entrar'} loading={loading} onPress={onSubmit} />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Não tem uma conta?</Text>
                    <Pressable onPress={() => navigation.navigate('signup')}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>Crie aqui!</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrepper>
    )
}

export default Login

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