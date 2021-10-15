import { useOverlay } from '@/store/useOverlay'
import { RecipeType } from '@/types/Recipe'
import { XIcon } from '@heroicons/react/outline'
import { useRecipesResult } from '../store/recipesResult'

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
    <div className="bg-white rounded-md absolute top-0 bottom-0 right-0 left-0 m-auto w-1/3 h-1/2 z-30">
      <div className="relative">
        <button className="absolute top-2 right-2" onClick={() => closeModal()}>
          <XIcon className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex flex-col p-10">
          <h1>{recipe.title}</h1>
        </div>
      </div>
    </div>
  )
}
