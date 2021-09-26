interface Props {
  children: React.ReactElement
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <h1>Header</h1>
      <main>{children}</main>
    </>
  )
}
