import AnimationDiv from "@/components/AnimationDiv";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <AnimationDiv className="flex flex-col items-center gap-10 ">
      <Services />

      <div className="m-auto px-8 sm:px-12 pt-[49px] pb-[93px] w-full gap-3 text-3xl font-semibold text-left ">
        <p className=" leading-[44px] md:text-center">
          Te gustaria <br className="sm:hidden " /> mas información?
        </p>

        <form
          action=""
          className="m-auto flex flex-col pl-3 gap-6 sm:gap-[30px] justify-evenly items-start w-full pt-7 sm:pt-5 sm:px-3 sm:w-[520px]"
        >
          <div className="w-full flex flex-col sm:flex-row items-start gap-[13px] sm:justify-between sm:pl-5 sm:items-center ">
            <label htmlFor="formInput1">Cual?</label>
            <input
              type="text"
              className="w-full sm:w-[300px] h-[60px] rounded-lg bg-slate-300"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-start gap-[13px] sm:justify-between sm:pl-5 sm:items-center ">
            <label htmlFor="formInput2">Correo</label>
            <input
              type="text"
              className="w-full sm:w-[300px] h-[60px] rounded-lg bg-slate-300"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-start gap-[13px] sm:justify-between sm:pl-5 sm:items-center ">
            <label htmlFor="formInput3 ">
              Algo <br className="md:hidden " /> mas?
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="w-full sm:w-[300px] h-[120px] rounded-lg bg-slate-300"
            ></textarea>
          </div>
          <button type="submit" className="hidden">
            Enviar
          </button>
        </form>
      </div>
    </AnimationDiv>
  );
}
