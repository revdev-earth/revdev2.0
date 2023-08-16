export default function Service({
  title,
  imgLink,
}: {
  title: string;
  imgLink: string;
}) {
  return (
    <li
      className=" px-10 pt-0 bg-slate-300 w-[160px] h-[160px] sm:w-[180px] sm:h-[190px] md:w-[200px] md:h-[215px] 
        flex flex-col gap-[20px] justify-center items-center 
        rounded-[30px] shadow-lg shadow-slate-400"
    >
      <div className=" bg-gray-500 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg "></div>
      <p className="bg-stone-400 w-[120px] h-[18px] rounded-lg">{}</p>
    </li>
  );
}
