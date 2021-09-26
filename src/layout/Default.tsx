import { Header } from '@/components/organisms/Header'

interface Props {
  children: React.ReactElement
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-4 md:px-10">
      <Header />
      <main>{children}</main>
    </div>
  )
}
