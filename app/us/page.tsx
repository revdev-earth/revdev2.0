// Welcome to RevDev: Igniting Projects and Technological Marvels!

import AnimationDiv from "@/components/AnimationDiv";

const companyInfo = [
  {
    title: "Unveiling Our Essence",
    description:
      "Dive into the very core of RevDev – where innovative projects ignite and cutting-edge technological solutions thrive. Our mission is to catalyze our clients' success through exceptional tech solutions that redefine possibilities.",
  },
  {
    title: "Guiding Lights - Our Values",
    description:
      "Our culture at RevDev is sculpted by unwavering values that illuminate our path. These values aren't just words; they're the pulsating energy behind every decision, interaction, and collaboration with our vibrant community of partners, clients, and dreamers.",
  },
  {
    title: "Evolution in Motion",
    description:
      "Journey with us through the twists and turns of our history – a tapestry woven with triumphs and challenges. Understanding our roots and evolution over time provides insight into the foundation upon which our present-day prominence rests.",
  },
  {
    title: "Innovations that Define Us",
    description:
      "Nestled within RevDev's beating heart are our avant-garde tech solutions. Delve into the intricacies of our products and services to uncover their distinctive features, remarkable advantages, and their ability to cater to the ever-evolving needs of our clientele.",
  },
  {
    title: "Community Connect and Market Pulse",
    description:
      "Our canvas extends beyond us; it encompasses the community we serve and the pulsating market we embrace. Capturing the aspirations and preferences of our clients acts as our North Star, guiding our innovation, expansion, and meaningful impact on our ecosystem.",
  },
  {
    title: "Competitive Edge Unveiled",
    description:
      "Amidst the competitive cacophony, we reveal our unique symphony. By understanding our rivals intimately, we compose strategies that spotlight our distinctive virtuosity and captivate the discerning eyes of our consumers.",
  },
  {
    title: "Maestros and Mavericks United",
    description:
      "Behind the curtains of RevDev stand a league of brilliant minds that fuel our triumphs. From visionary trailblazers to every collaborator, their roles and expertise are the cornerstone of our operations, pushing boundaries with each innovative stride.",
  },
  {
    title: "Beyond Impact - Shaping Tomorrows",
    description:
      "We gauge our social and environmental influence as a testament to our commitment to a brighter world. RevDev isn't solely about financial prosperity; it's a quest to champion values and purposes that enrich society and leave a lasting imprint on the planet.",
  },
];

const Us = () => {
  return (
    <AnimationDiv className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="text-3xl font-extrabold mb-4 ">About Us</div>
        <div className="text-gray-600 dark:text-gray-400 mb-6">
          Welcome to RevDev: Igniting Projects and Technological Marvels!
        </div>
        <div className="w-full h-48 bg-gray-300 mb-6 rounded-lg"></div>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto mt-8">
        {companyInfo.map(({ title, description }, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{title}</div>
            <div className="text-gray-600 dark:text-gray-400">
              {description}
            </div>
          </div>
        ))}
      </div>
    </AnimationDiv>
  );
};

export default Us;
