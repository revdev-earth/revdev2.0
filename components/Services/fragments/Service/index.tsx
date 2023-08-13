
export default function Service  ({title, imgLink}: {title: string, imgLink: string})  {

    return (
        <div className=" p-4 bg-gris w-[200px]
        flex flex-col gap-2 justify-center items-center 
        rounded-lg shadow-lg shadow-slate-400">
            <img src={imgLink} alt={title} className=" rounded-md"/>
            <p>{title}</p>
        </div>
    )
}