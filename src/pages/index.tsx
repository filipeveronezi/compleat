import Head from 'next/head'
import { Landing } from '@/modules/Landing'

const Home = () => {
  return (
    <>
      <Head>
        <title>Compleat</title>
      </Head>
      <Landing />
    </>
  )
}

export default Home
