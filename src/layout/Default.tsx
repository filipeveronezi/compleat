import { Header } from '@/components/organisms/Header'

interface Props {
  children: React.ReactElement
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-8 md:px-10">
      <Header />
      <main className="py-16 lg:py-24">{children}</main>
    </div>
  )
}
