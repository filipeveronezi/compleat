import { Hero } from './Hero'
import { Plans } from './Plans'

export const Landing = () => {
  return (
    <div className="flex flex-col gap-32 lg:gap-48">
      <Hero />
      <Plans />
    </div>
  )
}
