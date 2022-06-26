import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl , handleOnPress,...props}) => {
    return (
    <TouchableOpacity 
        style = {{
            width : 40
            ,height : 40,
            backgroundColor : COLORS.white,
            position : "absolute",
            borderRadius : SIZES.extraLarge,
            alignItems : "center",
            justifyContent : "center",
            ...SHADOWS.light,
            ...props
        }}
        onPress = {handleOnPress}
    >
        <Image resizeMode='contain' source = {imgUrl} style = {{width :24 ,height : 24}} />
    </TouchableOpacity>
  )
}
export const RectButton = ({minWidth ,fontSize,handleOnPress,...props}) => {
    return (
      <TouchableOpacity 
        style = {{
            backgroundColor : COLORS.primary,
            borderRadius : SIZES.extraLarge,
            minWidth ,
           padding :SIZES.small,
            ...props
        }}
        onPress = {handleOnPress}
    >
      <Text style = {{fontFamily :FONTS.semiBold,fontSize , color : COLORS.white,textAlign : "center"}} >Place a bid</Text>
    </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({})