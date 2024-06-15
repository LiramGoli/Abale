import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CirclesContainer from "../utils/CirclesContainer/CirclesContainer";
import { globalStyles } from "../utils/GlobalStyles";

const DashboardScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <View style={{ ...globalStyles.header, flex: 2 }}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 90, height: 90 }}
          />
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.mainContent}>
        <Text style={styles.mainTitle}>Hey Liram</Text>
        <CirclesContainer />
      </View>

      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
            <Icon name="calendar" style={styles.icon} />
            <Text style={globalStyles.text}>Follow up tests</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="child" style={styles.icon} />
            <Text style={globalStyles.text}>Follow up tests</Text>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
            <Icon name="users" style={styles.icon} />
            <Text style={globalStyles.text}>Follow up tests</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="clipboard" style={styles.icon} />
            <Text style={globalStyles.text}>Follow up tests</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A2A",
  },
  logoContainer: {
    position: "relative",
  },
  logo: {
    fontSize: 90,
    color: "#FFFFFF",
  },
  menuButton: {
    position: "absolute",
    right: 10,
  },
  menuText: {
    fontSize: 28,
    color: "#FFFFFF",
  },
  mainTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  circlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    fontSize: 100,
    color: "#FFFFFF",
  },
  centerCircle: {
    fontSize: 150,
    justifyContent: "center",
  },
  circleLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  circleLabel: {
    marginHorizontal: 26,
  },
  centerLabelContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  centerLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    marginHorizontal: 32,
  },

  grid: {
    paddingTop: 100,
    flex: 5,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 18,
  },
  gridItem: {
    alignItems: "center",
  },
  icon: {
    fontSize: 50,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  gridText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default DashboardScreen;
