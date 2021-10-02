import { CheckIcon } from '@heroicons/react/outline'

interface Props {
  text: string
  className?: string
}

export const Feature = ({ text, className }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <CheckIcon className="w-6 h-6" />
      <p className={className}>{text}</p>
    </div>
  )
}
