import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, Homeheader, NFTCard } from "../components";
const Home = () => {
  const [nftdata, setNftData] = useState(NFTData);
   
  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  console.log("home opened ")
  return (
    <SafeAreaView style={styles.container} background={COLORS.primary}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftdata}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor = {(item)=>item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Homeheader onSearch={handleSearch} />}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
