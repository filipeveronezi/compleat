import { Button } from '@/components/elements/Button'
import { Emoji } from '@/components/elements/Emoji'
import { RecipeType } from '@/types/Recipe'
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

  const searchRecipes = () => {
    const recipes: RecipeType[] = [
      {
        id: 1,
        title: 'Receita 1',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      },
      {
        id: 2,
        title: 'Receita 2',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      },
      {
        id: 3,
        title: 'Receita 3',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      },
      {
        id: 4,
        title: 'Receita 4',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      },
      {
        id: 5,
        title: 'Receita 5',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      },
      {
        id: 6,
        title: 'Receita 6',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      }
    ]
    setRecipes(recipes)
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
