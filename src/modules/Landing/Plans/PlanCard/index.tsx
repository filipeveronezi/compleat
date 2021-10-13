import { Button } from '@/components/elements/Button'
import { Card } from '@/components/elements/Card'
import { Feature } from '@/components/elements/Feature'

interface Props {
  title: string
  features: string[]
  buttonText: string
  disclaimer?: string
  disabled?: boolean
}

export const PlanCard = ({
  title,
  features,
  buttonText,
  disclaimer,
  disabled
}: Props) => {
  return (
    <Card className="relative">
      <>
        {disclaimer && (
          <div className="bg-black rounded-xl px-5 py-3 absolute -top-4 -left-4">
            <p className="text-white font-bold text-lg">{disclaimer}</p>
          </div>
        )}
        <div
          className={`flex flex-col w-full h-full gap-10 items-center justify-between ${
            disabled ? 'opacity-60' : ''
          }`}
        >
          <h1 className="text-black text-3xl font-bold">{title}</h1>
          <div className="flex flex-col gap-3">
            {features.map((feature, index) => {
              return (
                <Feature
                  key={index}
                  className="font-lato text-lg"
                  text={feature}
                />
              )
            })}
          </div>
          <Button text={buttonText} type="primary" disabled={disabled} />
        </div>
      </>
    </Card>
  )
}
