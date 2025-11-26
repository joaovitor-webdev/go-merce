import { createStackNavigator } from '@react-navigation/stack'
import BottomRoutes from './bottom.routes'
import { theme } from '../global/themes'
import Welcome from '../pages/welcome'
import Signup from '../pages/signup'
import Login from '../pages/login'

export default function Routes() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='welcome' screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:theme.colors.base
            }
        }}>
            <Stack.Screen name='welcome' component={Welcome}/>
            <Stack.Screen name='signup' component={Signup}/>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='BottomRoutes' component={BottomRoutes}/>
        </Stack.Navigator>
    )
}