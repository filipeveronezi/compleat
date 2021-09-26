import { Button } from '@/components/elements/Button'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="hidden md:block">
        <Image
          src="/images/written-logo.svg"
          width={200}
          height={38.76}
          alt="Compleat"
        />
      </div>
      <div className="md:hidden">
        <Image src="/images/logo.svg" width={70} height={54.3} alt="Compleat" />
      </div>
      <div className="flex gap-5">
        <Button type="secondary" text="Registrar" />
        <Button type="primary" text="Entrar" />
      </div>
    </header>
  )
}
