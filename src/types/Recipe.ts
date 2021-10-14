interface IngredientType {
  id: number
  name: string
  amount: number
  unit: string
  original: string
}

export interface RecipeType {
  id: number
  title: string
  image: string
  usedIngredientCount: number
  missedIngredientCount: number
  usedIngredients: Array<IngredientType>
  missedIngredients: Array<IngredientType>
}
