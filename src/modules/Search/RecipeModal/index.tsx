import Image from 'next/image'
import { useOverlay } from '@/store/useOverlay'
import { RecipeType } from '@/types/Recipe'
import { XIcon } from '@heroicons/react/outline'
import { useRecipesResult } from '../store/recipesResult'
import { Ingredient } from '../Ingredient'

interface Props {
  recipe: RecipeType
}

export const RecipeModal = ({ recipe }: Props) => {
  const { setOverlayState } = useOverlay()
  const { setOpenedRecipe } = useRecipesResult()

  const closeModal = () => {
    setOverlayState(false)
    setOpenedRecipe(null)
  }

  return (
    <div className="bg-gray-100 rounded-md fixed right-0 left-0 m-auto w-full max-w-screen-sm z-30">
      <div className="relative">
        <button className="absolute top-2 right-2" onClick={() => closeModal()}>
          <XIcon className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex flex-col p-10 gap-5">
          <div className="flex flex-col items-center w-full">
            <div className="">
              <Image
                className="rounded-xl"
                src={recipe.image}
                alt={recipe.title}
                width={150}
                height={100}
                layout="intrinsic"
                objectFit="cover"
              />
            </div>
            <h1 className="font-bold text-lg">{recipe.title}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Ingredientes que você já tem</h1>
            {recipe.usedIngredients.map((ingredient) => (
              <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Ingredientes que você precisa</h1>
            {recipe.missedIngredients.map((ingredient) => (
              <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
