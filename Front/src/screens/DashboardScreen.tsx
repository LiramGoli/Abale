import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DashboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Icon name="circle" style={styles.logo} />
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>Hey Dude</Text>
        <View style={styles.circlesContainer}>
          <Icon name="circle" style={styles.circle} />
          <Icon name="circle" style={[styles.circle, styles.centerCircle]} />
          <Icon name="circle" style={styles.circle} />
        </View>
        <View style={styles.circleLabelsContainer}>
          <Text style={styles.circleLabel}>Trimester</Text>
          <Text style={styles.circleLabel}>Week</Text>
          <Text style={styles.circleLabel}>Month</Text>
        </View>
      </View>

      {/* Grid Icons */}
      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
            <Icon name="calendar" style={styles.icon} />
            <Text style={styles.gridText}>Follow up tests</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="child" style={styles.icon} />
            <Text style={styles.gridText}>Weekly review</Text>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
            <Icon name="users" style={styles.icon} />
            <Text style={styles.gridText}>Share With Friends</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="clipboard" style={styles.icon} />
            <Text style={styles.gridText}>checklist</Text>
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
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop:10
  },
  logoContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -25 }],
  },
  logo: {
    paddingTop:20,
    fontSize: 50,
    color: "#FFFFFF",
  },
  menuButton: {
    position: "absolute",
    right: 10,
  },
  menuText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  mainContent: {
    paddingTop:15,
    alignItems: "center",
    marginTop: 40,
  },
  mainTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  circlesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    fontSize: 100,
    color: "#FFFFFF",
    marginHorizontal: 10,
  },
  centerCircle: {
    fontSize: 150,
  },
  circleLabelsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  circleLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    marginHorizontal: 20,
  },
  grid: {
    marginTop: 40,
    backgroundColor: "red",
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
