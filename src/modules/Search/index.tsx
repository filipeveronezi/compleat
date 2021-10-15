import { Button } from '@/components/elements/Button'
import { Emoji } from '@/components/elements/Emoji'
import { RecipeType } from '@/types/Recipe'
import { translate } from '@/utils/translate'
import { ChangeEvent, useState } from 'react'
import { Recipe } from './Recipe'
import { SearchBar } from './SearchBar'
import { useRecipesResult } from './store/recipesResult'

export const Search = () => {
  const { recipes, setRecipes } = useRecipesResult()
  const [ingredients, setIngredients] = useState<string[]>([''])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    ingredients[index] = event.target.value
  }

  const searchRecipes = async () => {
    let currentIngredients = ingredients.join(',')
    currentIngredients = await translate(currentIngredients, 'en')
    currentIngredients = currentIngredients.replace(', ', ',')
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}&ingredients=${currentIngredients}&number=6`,
      {
        method: 'GET'
      }
    )
    const data = await response.json()
    await setRecipes(data as Array<RecipeType>)
  }

  return (
    <div>
      <div className="flex flex-col gap-5 max-w-screen-sm mx-auto">
        {ingredients.map((ingredient, index) => (
          <SearchBar
            key={index}
            placeholder={`ingrediente ${index + 1}...`}
            onChange={(event) => handleChange(event, index)}
          />
        ))}
        <div className="flex gap-5">
          <Button
            text="Adicionar"
            type="secondary"
            onClick={() => setIngredients(ingredients.concat(''))}
            disabled={ingredients.length > 1}
          />
          <Button
            text="Pesquisar"
            type="primary"
            onClick={() => searchRecipes()}
          />
        </div>
      </div>
      <div className="mt-10">
        {recipes !== null ? (
          <div className="grid grid-cols-1 gap-10 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        ) : (
          <div className="max-w-screen-sm mx-auto h-full flex flex-col gap-5 items-center justify-center py-32">
            <p className="text-center font-bold text-xl lg:text-3xl">
              Diga o que tem na sua geladeira e nós damos um jeito
            </p>
            <Emoji text="😝" />
          </div>
        )}
      </div>
    </div>
  )
}
