import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A2A",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    alignItems: "center",
    flex: 3,
    justifyContent: "space-between",
  },
});
