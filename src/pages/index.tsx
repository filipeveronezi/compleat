import { Emoji } from '@/components/elements/Emoji'
import { Cta } from '@/components/organisms/Cta'

const Home = () => {
  return (
    <div className="h-auto py-44 flex flex-col items-center gap-20 lg:flex-row">
      <div className="flex-1 flex">
        <Cta
          heading="Complete receitas com o que tiver na geladeira"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo non velit finibus aliquam non vitae arcu. Donec magna lacus, lacinia vitae efficitur vitae, tristique in orci."
          actionText="Explorar"
          actionHref="#"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <p className="text-4xl font-bold">Escolha alguns ingredientes...</p>
        <div className="flex gap-8">
          <Emoji text="🥛" />
          <Emoji text="🍫" />
        </div>
        <p className="text-4xl font-bold">... e encontre receitas!</p>
        <div className="flex gap-8">
          <Emoji text="☕" />
          <Emoji text="🍪" />
          <Emoji text="🍰" />
          <Emoji text="🍩" />
        </div>
      </div>
    </div>
  )
}

export default Home
