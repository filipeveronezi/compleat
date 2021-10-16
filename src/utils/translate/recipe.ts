import { RecipeType } from '@/types/Recipe'
import { translate } from './index'

export const translateRecipeToPt = async (recipe: RecipeType) => {
  let translatedRecipe = recipe

  translatedRecipe.title = await translate(recipe.title, 'pt', 'en')

  for (let i = 0; i < recipe.missedIngredients.length; i++) {
    translatedRecipe.missedIngredients[i].name = await translate(
      recipe.missedIngredients[i].name,
      'pt',
      'en'
    )
    translatedRecipe.missedIngredients[i].unit = await translate(
      recipe.missedIngredients[i].unit,
      'pt',
      'en'
    )
  }

  for (let i = 0; i < recipe.usedIngredients.length; i++) {
    translatedRecipe.usedIngredients[i].name = await translate(
      recipe.usedIngredients[i].name,
      'pt',
      'en'
    )
    translatedRecipe.usedIngredients[i].unit = await translate(
      recipe.usedIngredients[i].unit,
      'pt',
      'en'
    )
  }

  return translatedRecipe
}
