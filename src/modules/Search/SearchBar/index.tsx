import { ChangeEvent } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const SearchBar = ({ onChange, placeholder }: Props) => {
  return (
    <div className="relative">
      <input
        className="w-full h-14 pl-14 rounded-md font-bold border-none shadow-md"
        placeholder={placeholder}
        type="text"
        onChange={(event) => onChange(event)}
      />
      <SearchIcon className="w-5 h-5 absolute text-gray-500 left-3 top-0 bottom-0 my-auto lg:w-6 lg:h-6" />
    </div>
  )
}
