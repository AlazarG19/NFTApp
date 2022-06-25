import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {COLORS,NFTData} from '../constants'
import { FocusedStatusBar, Homeheader, NFTCard } from '../components'
const Home = () => {
  return (
    <SafeAreaView style = {styles.container} background = {COLORS.primary} >
      <FocusedStatusBar/>
      <View style = {{flex : 1}} >
      <View style = {{zIndex : 0}} >
      <FlatList data = {NFTData} 
      renderItem = {({item})=> <NFTCard data = {item} />} 
      // keyExtractor = {({item})=>item.id}      
      showsVerticalScrollIndicator = {false}
      ListHeaderComponent = {()=> <Homeheader/>}
      />
      <View style = {{position : "absolute" ,top : 0 ,bottom : 0 ,right : 0,left : 0 ,zIndex : -1}} >
      <View style = {{height : 300,backgroundColor : COLORS.primary}} />
      <View style = {{flex : 1,backgroundColor : COLORS.white}} />
      </View>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex : 1
}})