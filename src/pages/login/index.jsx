// import { View, Text, Image, TextInput, Pressable, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import { style } from './styles'
// import LogoClean from '../../assets/images/logo-gomerce.png'
// import { MaterialIcons } from '@expo/vector-icons'
// import InputUser from '../../components/inputs/input-user'
// import { InputPassword } from '../../components/inputs/input-password/InputPassword'
// import { useNavigation, NavigationProp } from '@react-navigation/native'
// import BackButton from '../../components/backButton'
// import { StatusBar } from 'expo-status-bar'

// export default function Login() {

//   const navigation = useNavigation()

//   const [user, setUser] = useState('sauble');
//   const [password, setPassword] = useState('sauble123');
//   const [loading, setLoading] = useState(false);

//   function getLogin() {
//     try {
//       setLoading(true)
//       if (!user || !password) {
//         setLoading(false)
//         return Alert.alert("Atenção", "Campos vazios! Preencha-os")
//       }

//       setTimeout(() => {
//         if (user == 'sauble' && password == 'sauble123') {
//           navigation.navigate('BottomRoutes')
//         } else {
//           Alert.alert('Usuário não encontrado')
//         }
//         setLoading(false)
//       }, 3000)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <View style={style.container}>
//       <StatusBar style='dark'/>
//       <View style={style.titleContainer}>
//       <BackButton name={'keyboard-arrow-left'} onPress={()=>{navigation.goBack()}} size={25}/>
//         <Image style={style.logoTitle} source={LogoClean} resizeMode='contain' />
//         <Text style={style.textTitle}>Bem-vindo de volta ao</Text>
//         <Text style={style.textTitle}>GO-Merce</Text>
//       </View>
//       <View style={style.inputsContainer}>
//         <InputUser value={user} onChangeText={setUser} />
//         <InputPassword value={password} onChangeText={setPassword} />
//       </View>
//       <View style={style.containerButtons}>
//         <Pressable style={style.buttonLogin} onPress={() => getLogin()}>
//           {
//             loading ?
//               <ActivityIndicator
//                 color={'#ffffff'}
//                 size={'small'}></ActivityIndicator>
//               :
//               <Text style={style.textButtonLogin}>Entrar</Text>
//           }
//         </Pressable>
//       </View>
//       <View style={style.helpContainer}>
//         <Text style={style.linkResetPass}>Esqueci minha senha</Text>
//         <View style={style.signupContainer}>
//           <Text style={style.signupMessage}>Ainda não tem uma conta?</Text>
//           <Text style={style.signupLink}>Crie agora!</Text>
//         </View>
//       </View>
//     </View>
//   )
// }