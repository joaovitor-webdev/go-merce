import { Dimensions, StyleSheet } from "react-native";
import { theme, theme } from "../../../global/themes";

export const style = StyleSheet.create({
  inputUser:{
    width:Dimensions.get('screen').width/1.3,
  },
  userContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0.5,
    borderColor:theme.colors.primary,
    borderRadius:theme.radius.xl,
    justifyContent:'space-around',
    paddingHorizontal:5,
    color:theme.colors.dark
  },
  userInput:{
    width: '90%',
    fontSize: 14,
    textDecorationColor:theme.colors.dark
  }
});