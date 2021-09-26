interface Props {
  text: string
}

export const Emoji = ({ text }: Props) => {
  return (
    <div className="w-16 h-16 rounded-md flex items-center justify-center z-10 bg-white shadow-emoji">
      <p className="text-3xl">{text}</p>
    </div>
  )
}
