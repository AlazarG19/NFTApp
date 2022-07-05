import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import {
  People,
  EndDate,
  EthPrice,
  SubInfo,
  ImageCmp,
  NFTTitle,
} from './SubInfo'
const NFTCard = (data) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
          source={data.data.image}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle
          title={data.data.name}
          subTitle={data.data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View style={{ flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding : 10,paddingTop : 0}}>
      <EthPrice price={data.data.price} />
      <RectButton
        minWidth={120}
        fontSize={SIZES.font}
        handleOnPress={() => navigation.navigate('Details',data.data)}
      />
      </View>
    </View>
  )
}

export default NFTCard
