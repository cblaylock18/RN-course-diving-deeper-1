import { View, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
