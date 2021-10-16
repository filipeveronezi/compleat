import Link from 'next/link'
import { IngredientType } from '@/types/Ingredient'
import { ExternalLinkIcon } from '@heroicons/react/outline'

interface Props {
  ingredient: IngredientType
}

export const Ingredient = ({ ingredient }: Props) => {
  return (
    <div
      className="flex items-center justify-between w-full bg-white rounded-lg px-4 py-2"
      key={ingredient.id}
    >
      <p className="font-lato capitalize">{ingredient.name}</p>
      <div className="flex gap-5">
        <p className="text-gray-400 font-lato font-bold">{`${ingredient.amount} ${ingredient.unit}`}</p>
        <Link
          href={`https://www.google.com/search?hl=pt-BR&tbm=shop&psb=1&q=${ingredient.name}`}
        >
          <a className="grid place-items-center" target="_blank">
            <ExternalLinkIcon className="text-gray-400 w-4 h-4" />
          </a>
        </Link>
      </div>
    </div>
  )
}
