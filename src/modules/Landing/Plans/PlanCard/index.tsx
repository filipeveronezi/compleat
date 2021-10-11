import { Button } from '@/components/elements/Button'
import { Card } from '@/components/elements/Card'
import { Feature } from '@/components/elements/Feature'

interface Props {
  title: string
  features: string[]
  buttonText: string
}

export const PlanCard = ({ title, features, buttonText }: Props) => {
  return (
    <Card>
      <div className="flex flex-col w-full h-full gap-10 items-center justify-between">
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
        <Button text={buttonText} type="primary" />
      </div>
    </Card>
  )
}
