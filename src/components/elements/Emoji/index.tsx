interface Props {
  text: string
}

export const Emoji = ({ text }: Props) => {
  return (
    <div className="w-12 h-12 rounded-md flex items-center justify-center z-10 bg-white shadow-card lg:w-16 lg:h-16">
      <p className="text-xl md:text-3xl">{text}</p>
    </div>
  )
}
