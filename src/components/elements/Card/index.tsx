interface Props {
  children: React.ReactElement
  className?: string
}

export const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} px-5 py-10 w-max bg-white shadow-card rounded-2xl`}
    >
      {children}
    </div>
  )
}
