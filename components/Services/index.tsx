import Service from './fragments/Service'
import data from './fragments/data.json'

export default function Services () {
    return (
        <div className='flex flex-col justify-center items-center'>
        <h3 className='text-center text-3xl font-bold'>services</h3>
        <ul className='w-full grid gap-7 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                data.services.map((service) => {
                    return (
                        <Service key={`${Math.random()*10}`} title={service?.title} imgLink={service?.imgLink}/>
                    )
                })
            }
        </ul>
        </ div>
    )
}