import { MouseEventHandler } from 'react'
import Link from 'next/link'

interface Props {
  type: 'primary' | 'secondary'
  text: string
  shadow?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ type, text, shadow, onClick }: Props) => {
  return (
    <button
      className={`flex justify-center items-center rounded-xl w-full h-10 px-6 py-4 font-bold cursor-pointer md:h-14 ${
        type === 'primary'
          ? 'text-white bg-brand-green'
          : 'text-brand-green bg-white'
      } ${shadow && 'shadow-lg'}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
