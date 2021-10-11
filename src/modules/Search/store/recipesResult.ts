import create from 'zustand'
import { RecipeType } from '@/types/Recipe'

interface RecipesResult {
  recipes: RecipeType[] | null
  setRecipes: (recipe: RecipeType[] | null) => void
}

export const useRecipesResult = create<RecipesResult>((set) => ({
  recipes: null,
  setRecipes: (recipes) => set({ recipes })
}))
