
export default function Service  ({title, imgLink}: {title: string, imgLink: string})  {

    return (
        <li className=" px-10 pt-0 bg-gris w-[200px] h-[215px] justify-self-center
        flex flex-col gap-7 justify-center items-center 
        rounded-3xl shadow-lg shadow-slate-400">
            <div className="bg-grisOscuro w-[120px] h-[120px] rounded-lg " ></div >
            <p className="bg-grisOscuro w-[120px] h-[18px] rounded-lg">{}</p>
        </li>
    )
}