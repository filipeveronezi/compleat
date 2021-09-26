import { MouseEventHandler } from 'react'
import Link from 'next/link'

interface WrapperProps {
  children: React.ReactElement
}

interface Props {
  type: 'primary' | 'secondary'
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ type, text, onClick }: Props) => {
  return (
    <button
      className={`flex justify-center items-center w-32 rounded-xl h-10 px-6 py-4 font-bold cursor-pointer md:h-14 ${
        type === 'primary'
          ? 'text-white bg-brand-green'
          : 'text-brand-green bg-white'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
