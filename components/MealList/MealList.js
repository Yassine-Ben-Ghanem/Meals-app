import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

export default function MealList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    /*function pressHandler() {
          navigation.navigate("MealsDetails");
        }*/

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      //onPress: pressHandler,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
