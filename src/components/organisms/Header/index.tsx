import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { animate, AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/elements/Button'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <a className="hidden md:block">
          <Image
            src="/images/written-logo.svg"
            width={200}
            height={38.76}
            alt="Compleat"
          />
        </a>
      </Link>
      <div className="hidden gap-5 lg:flex">
        <Button type="secondary" text="Registrar" />
        <Button type="primary" text="Entrar" />
      </div>
      <Link href="/">
        <a className="md:hidden">
          <Image
            src="/images/logo.svg"
            width={40}
            height={31.03}
            alt="Compleat"
          />
        </a>
      </Link>
      <div className="relative lg:hidden">
        <button onClick={() => setIsMenuOpened(true)}>
          <MenuIcon className="w-6 h-6 text-black" />
        </button>
        <AnimatePresence>
          {isMenuOpened && (
            <motion.div
              className="absolute -top-5 -right-5 flex flex-col gap-3 items-center justify-center w-max h-auto px-16 py-10 bg-white rounded-2xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-3 right-3"
                onClick={() => setIsMenuOpened(false)}
              >
                <XIcon className="w-6 h-6 text-gray-400" />
              </button>
              <Button shadow type="primary" text="Entrar" />
              <Button shadow type="secondary" text="Registrar" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
