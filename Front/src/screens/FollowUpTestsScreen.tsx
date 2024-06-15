import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CheckBox from "expo-checkbox";
import CirclesContainer from "../utils/CirclesContainer/CirclesContainer";
import { globalStyles } from "../utils/GlobalStyles";

const FollowUpTests = () => {
  const [checkedItems, setCheckedItems] = useState<Array<boolean>>(
    new Array(7).fill(false)
  );

  const handleCheckBoxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <View style={globalStyles.container}>
      <View style={{ ...globalStyles.header, flexDirection: "column" }}>
        <Text style={globalStyles.headerText}>List of Tests</Text>
        <View>
          <CirclesContainer
            circleSize={50}
            centerCircleSize={75}
            labelFontSize={14}
            centerLabelFontSize={16}
          />
        </View>
      </View>
      <View style={{ ...globalStyles.mainContent }}>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.itemContainer}>
              {testItems.map((item, index) => (
                <View key={index} style={styles.item}>
                  <CheckBox
                    color={checkedItems[index] ? "#0A0A2A" : undefined}
                    value={checkedItems[index]}
                    onValueChange={() => handleCheckBoxChange(index)}
                  />
                  <Text
                    style={[
                      styles.itemText,
                      checkedItems[index] && styles.itemTextChecked,
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.filler}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

const testItems = [
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
  "test for peepee in the poopoo",
];

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 5,
  },
  filler: {
    flex: 1,
  },
  itemContainer: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
  itemTextChecked: {
    textDecorationLine: "line-through",
  },
});

export default FollowUpTests;
