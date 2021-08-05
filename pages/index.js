import Head from 'next/head'
import Banner from '../components/Banner'
import ExploreData from '../components/ExploreData'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediamCard from '../components/MediamCard'

function index({exploreData,cardsData}) {
  return (
    <div>
      <Head>
          <title>Faysal Home Page</title>
      </Head>

      {/* header */}
        <Header />
      {/* Banner */}
      <Banner />

      {/* main */}
      <main className="max-w-7xl mx-auto sm:px-16 px-8 bg-gray-100 shadow-md mb-4">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-4'>
            {exploreData?.map(({ img, location, distance }) => (
                <ExploreData key={img} img={img} location={location} distance={distance} />
              ))}
          </div>

        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <MediamCard key={img} title={title} img={img} />
            ))}
          </div>

        </section>

        {/* Large Card */}

        {/* https://links.papareact.com/4cj */}
        
        {/* <LargeCard img='/img/bottomBanner.png' title='The Greatest Outdoors' decerption='Wishlists curated by Airbnb' buttonText='Get Inspired'/> */}

        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' decerption='Wishlists curated by Airbnb' buttonText='Get Inspired'/>

      </main>

      <Fotter />

    </div>
  )
}

export default index


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((response) => response.json())

  const cardsData = await fetch('https://links.papareact.com/zp1').then((response) => response.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}