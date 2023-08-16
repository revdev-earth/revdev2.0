import Service from "./fragments/Service";
import data from "./fragments/data.json";

export default function Services() {
  return (
    <ul
      className="
        w-full lg:w-[1000px] m-auto
        grid gap-4 sm:gap-[30px] place-content-center
        grid-cols-[repeat(auto-fit,_160px)] sm:grid-cols-[repeat(3,_180px)] md:grid-cols-[repeat(3,_200px)] lg:grid-cols-[repeat(4,_200px)] sm:pt-12
      "
    >
      {data.services.map((service) => (
        <Service
          key={`${Math.random() * 10}`}
          title={service?.title}
          imgLink={service?.imgLink}
        />
      ))}
    </ul>
  );
}
