import create from 'zustand'
import { RecipeType } from '@/types/Recipe'

interface RecipesResult {
  recipes: RecipeType[] | null
  openedRecipe: RecipeType | null
  setRecipes: (recipes: RecipeType[] | null) => void
  setOpenedRecipe: (openedRecipe: RecipeType | null) => void
}

export const useRecipesResult = create<RecipesResult>((set) => ({
  recipes: null,
  openedRecipe: null,
  setRecipes: (recipes) => set({ recipes }),
  setOpenedRecipe: (openedRecipe) => set({ openedRecipe })
}))
