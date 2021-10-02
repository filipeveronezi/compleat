interface Props {
  children: React.ReactElement
}

export const Card = ({ children }: Props) => {
  return (
    <div className="px-5 py-10 w-max bg-white shadow-card rounded-2xl">
      {children}
    </div>
  )
}
