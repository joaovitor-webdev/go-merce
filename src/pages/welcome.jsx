import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrepper from '../components/ScreenWrepper'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../global/themes'
import { hp, wp } from '../global/helpers'
import Button from '../components/button'
import { useNavigation } from 'expo-router'

const Welcome = () => {
    const navigation = useNavigation()
    const go = (screenName) => {
        navigation.navigate(screenName)
    }
    return (
        <ScreenWrepper>
            <StatusBar style='auto' />
            <View style={styles.container}>
                <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/logo-gomerce.png')} />
                <View style={{ gap: 10 }}>
                    <Text style={styles.welcomeTitle}>GO-Merce</Text>
                    <Text style={styles.welcomePunchline}>Descubra, compre e venda com facilidade.</Text>
                </View>
                <View style={styles.footer}>
                    <Button title='Comece agora!' buttonStyle={{ marginHorizontal: wp(3) }} onPress={() => go('signup')} />
                    <View style={styles.bottonTextContainer}>
                        <Text style={styles.loginText}>Já tem uma conta?</Text>
                        <Pressable onPress={()=>go('login')}>
                            <Text style={[styles.loginText, {color:theme.colors.primary}]}>Entre aqui</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrepper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.base,
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    welcomeTitle: {
        color: theme.colors.textDark,
        fontSize: hp(6),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold,
    },
    welcomePunchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(2.5),
        color: theme.colors.textDark,
    },
    footer:{
        gap: 30,
        width:'100%'
    },
    bottonTextContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5
    },
    loginText:{
        textAlign:'center',
        color: theme.colors.textDark,
        fontSize: hp(2)
    }
})