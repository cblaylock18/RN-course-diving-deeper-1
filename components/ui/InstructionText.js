import { StyleSheet, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";

const InstructionText = ({ style, children }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: COLORS.accent500,
    fontSize: 24,
  },
});
