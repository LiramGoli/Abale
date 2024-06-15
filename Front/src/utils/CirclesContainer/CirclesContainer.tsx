import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { globalStyles } from "../GlobalStyles";

const CirclesContainer = ({
  circleSize = 100,
  centerCircleSize = 150,
  labelFontSize = 16,
  centerLabelFontSize = 18,
}) => {
  return (
    <>
      <View style={styles.circlesContainer}>
        <Icon name="circle" style={[styles.circle, { fontSize: circleSize }]} />
        <Icon name="circle" style={[styles.circle, styles.centerCircle, { fontSize: centerCircleSize }]} />
        <Icon name="circle" style={[styles.circle, { fontSize: circleSize }]} />
      </View>
      <View style={styles.circleLabelsContainer}>
        <Text style={[styles.circleLabel, { fontSize: labelFontSize }]}>Trimester</Text>
        <View style={styles.centerLabelContainer}>
          <Text style={[styles.centerLabel, { fontSize: centerLabelFontSize }]}>Week</Text>
        </View>
        <Text style={[globalStyles.text, { marginHorizontal: 44, fontSize: labelFontSize }]}>
          Month
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  circlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    color: "#FFFFFF",
  },
  centerCircle: {
    justifyContent: "center",
  },
  circleLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  circleLabel: {
    marginHorizontal: 26,
    color: "#FFFFFF"
  },
  centerLabelContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  centerLabel: {
    color: "#FFFFFF",
    marginHorizontal: 32,
  },
});

export default CirclesContainer;
