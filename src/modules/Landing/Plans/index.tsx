import Image from 'next/image'
import { PlanCard } from './PlanCard'

export const Plans = () => {
  const freeFeatures = ['Pesquisas ilimitadas', 'Combine até 2 ingredientes']
  const paidFeatures = [
    'Pesquisas ilimitadas',
    'Combine até 4 ingredientes',
    'Descontos exclusivos'
  ]

  return (
    <div className="w-full flex items-center justify-between self-center">
      <div className="hidden flex-1 xl:block">
        <Image
          src="/images/illustration.svg"
          alt="Talheres e chapéu de culinária"
          layout="intrinsic"
          width={450}
          height={441.91}
        />
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="font-bold text-4xl self-center lg:text-5xl xl:self-start">
          Conheça nossos planos
        </h1>
        <div className="flex flex-col self-center gap-10 md:flex-row">
          <PlanCard
            title="Grátis"
            features={freeFeatures}
            buttonText="Explorar agora"
          />
          <PlanCard
            title="R$9"
            features={paidFeatures}
            buttonText="Assinar agora"
          />
        </div>
      </div>
    </div>
  )
}
