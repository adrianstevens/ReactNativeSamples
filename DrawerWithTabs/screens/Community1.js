import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Community1 = () => {
  return (
    <View style={styles.center}>
      <Text>Community 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Community1;