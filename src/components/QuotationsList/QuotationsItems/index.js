import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require("../../../img/onebitcoinRed.png")}
          />
          <Text style={styles.dayCotation}>22/04/2022</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>$ 53331.051</Text>
      </View>
    </View>
  );
}
