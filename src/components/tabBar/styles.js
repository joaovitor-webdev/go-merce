import { StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.base,
        justifyContent:'space-evenly',
        alignItems: 'center',
        paddingBottom:40,
        shadowColor:'#000000',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7
    },
    tabButton: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:5
    },
    activeTab: {
        backgroundColor: theme.colors.secundary,
    },
    tabText: {
        fontSize: 14,
        color: theme.colors.primary,
    },
    activeText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
})
