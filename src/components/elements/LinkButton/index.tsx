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
        <a className="underline font-bold text-2xl md:hover:underline md:hover:mr-2 transition-all md:no-underline">
          {text}
        </a>
      </Link>
      <ArrowRightIcon className="w-6 h-6" />
    </div>
  )
}
