import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import {COLORS,SIZES,SHADOWS,assets} from "../constants"
const NFTCard = (data) => {
  return (
    <View style = {{backgroundColor : COLORS.white,borderRadius:SIZES.font,marginBottom : SIZES.extraLarge,margin : SIZES.base,...SHADOWS.dark}} >
        <View style = {{width : "100%" , height : 250}} >
        <Image source={`./${data.image}`} />
        </View>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({})