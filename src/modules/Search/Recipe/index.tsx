import { RecipeType } from '@/types/Recipe'

interface Props {
  recipe: RecipeType
}

export const Recipe = ({ recipe }: Props) => {
  return (
    <div className="bg-white rounded-lg p-20 grid place-items-center">
      {recipe.title}
    </div>
  )
}
