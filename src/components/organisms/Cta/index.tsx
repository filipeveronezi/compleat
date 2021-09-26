import { LinkButton } from '@/components/elements/LinkButton'

interface Props {
  heading: string
  text: string
  actionText: string
  actionHref: string
}

export const Cta = ({ heading, text, actionText, actionHref }: Props) => {
  return (
    <div className="max-w-lg flex flex-col gap-5">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="font-lato text-lg">{text}</p>
      <LinkButton text={actionText} href={actionHref} />
    </div>
  )
}
