import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline'

interface Props {
  text: string
  href: string
}

export const LinkButton = ({ text, href }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={href}>
        <a className="font-bold text-2xl md:hover:underline md:hover:mr-2 transition-all">
          {text}
        </a>
      </Link>
      <ArrowRightIcon className="w-6 h-6" />
    </div>
  )
}
