import { format } from "date-fns";
import { useRouter } from "next/router";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Search({searchReasult}) {
    const router = useRouter();
    
    const { startDate, numOfGust, location, endDate } = router.query;
    
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatedStartDate} - ${formatedEndDate}`;
    
    return (
        <div>
            {/* Header */}
            <Header placeholder={`${location} | ${range} | ${numOfGust}`} />
            {/* main */}
            <main className='flex max-w-[900px] mx-auto'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-sm'>300+ Stays - {range} - for {numOfGust} guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='mb-5 hidden lg:inline-flex flex space-x-4 whitespace-nowrap'>
                        <p className='btn'>Cancellation Flexibility</p>
                        <p className='btn'>Type of Place</p>
                        <p className='btn'>Price</p>
                        <p className='btn'>Rooms and Beds</p>
                        <p className='btn'>More fillters</p>
                    </div>

                        {searchReasult?.map(({ img, title, location, description, star, price, text,total }) => (
                            <InfoCard key={img} img={img} title={title} location={location} description={description} star={star} price={price} text={text} total={total}/>
                        ))}

                </section>
            </main>
            {/* fotter */}
            <Fotter />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const searchReasult = await fetch('https://links.papareact.com/isz').then((response) => response.json())

    return {
        props: {
            searchReasult
        }
    }
    
}