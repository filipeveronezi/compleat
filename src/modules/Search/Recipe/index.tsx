import { useEffect, useState } from 'react'
import Image from 'next/image'
import { RecipeType } from '@/types/Recipe'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { translate } from '@/utils/translate'
import { useRecipesResult } from '../store/recipesResult'
import { useOverlay } from '@/store/useOverlay'
import { translateRecipeToPt } from '@/utils/translate/recipe'

interface Props {
  recipe: RecipeType
}

export const Recipe = ({ recipe }: Props) => {
  const [translatedTitle, setTranslatedTitle] = useState<string>('')
  const { setOpenedRecipe, openedRecipe } = useRecipesResult()
  const { setOverlayState } = useOverlay()

  useEffect(() => {
    async function translateTitleToPt() {
      const translatedTitle = await translate(recipe.title, 'pt', 'en')
      setTranslatedTitle(translatedTitle)
    }
    translateTitleToPt()
  }, [recipe.title])

  const openRecipe = async () => {
    const translatedRecipe = await translateRecipeToPt(recipe)
    console.log(translatedRecipe)
    setOpenedRecipe(translatedRecipe)
    setOverlayState(true)
  }

  return (
    <div
      onClick={() => openRecipe()}
      className="bg-white w-64 h-56 flex flex-col rounded-xl cursor-pointer shadow-card"
    >
      <div className="w-full h-3/4 relative">
        <Image
          className="rounded-t-xl"
          src={recipe.image}
          alt={translatedTitle}
          width={300}
          height={170}
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-center gap-3 px-1">
        <p className="capitalize truncate w-3/4">{translatedTitle}</p>
        <ArrowRightIcon className="w-6 h-6" />
      </div>
    </div>
  )
}
