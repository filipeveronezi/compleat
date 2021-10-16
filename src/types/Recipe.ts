import { IngredientType } from '@/types/Ingredient'

export interface RecipeType {
  id: number
  title: string
  image: string
  usedIngredientCount: number
  missedIngredientCount: number
  usedIngredients: Array<IngredientType>
  missedIngredients: Array<IngredientType>
}
