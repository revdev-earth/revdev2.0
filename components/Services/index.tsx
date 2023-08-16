import Service from './fragments/Service'
import data from './fragments/data.json'

export default function Services () {
    return (
        <ul className='
            w-full lg:w-[1000px] m-auto
            grid gap-4 sm:gap-[30px] place-content-center
            grid-cols-c2 sm:grid-cols-s2 md:grid-cols-s3 lg:grid-cols-s4 '>
            {
                data.services.map((service) => {
                    return (
                        <Service key={`${Math.random()*10}`} title={service?.title} imgLink={service?.imgLink}/>
                    )
                })
            }
        </ul>
    )
}