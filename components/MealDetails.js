import { View, Text, StyleSheet } from "react-native";
export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  styleText,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, styleText]}>{duration}min</Text>
      <Text style={[styles.detailItem, styleText]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, styleText]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
