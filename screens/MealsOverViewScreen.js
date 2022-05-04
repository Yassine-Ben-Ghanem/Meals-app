import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverViewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return <MealList items={displayedMeals} />;
}
