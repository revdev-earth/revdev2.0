export default function Carrers() {
  return (
    <div>
      <div>
        <div>Carrers</div>
        <div>Empowering the best digital talent</div>
        <div>image</div>
      </div>

      <div>
        <div>Open vacancies</div>
        <div>
          Exciting opportunities for people seeking a supportive, collaborative
          and empowering workplace.
        </div>
        <div>
          We believe that our people are our greatest asset and we strive to
          create an environment where everyone can thrive, learn, and achieve
          their career goals. Explore our job listings and discover your place
          with us.
        </div>
      </div>

      <div>
        <div>
          If you like the look of Parallax but don’t see an opportunity for you
          right now, please register your interest. We look at and consider all
          applications.
        </div>
        <div>Register</div>
      </div>

      <div>
        <div>Perks & benefits</div>

        <div>
          {[
            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Opportunity to grow",
              description:
                "A personalised progression route is clear from day one. We host regular 1:1s, paid training days and quarterly hack days so the sky’s the limit.",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Flexible, remote working",
              description:
                "Not a morning person? Not a problem. Work also needs to work for you, which is why we offer flexible start times and the opportunity to work remotely.",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Top-tier healthcare",
              description:
                "There’s nothing more important. We offer free top-tier Bupa healthcare to everyone who works with us because health is something that shouldn’t be compromised.",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Social butterflies",
              description:
                "What can we say... we’re a social bunch. Team lunches, beers on a Friday, team events, weekly games evenings featuring all of your favourite board games and Mario Kart battles, we’re always up for a social.",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Top-notch technology",
              description:
                "We all love a Nokia 3310, but there’s a time and a place. To create great things, you’ve got to be backed by great technology. Whether you're in the office or remote, we’ll make sure you’re equipped to create!",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Mental wellbeing",
              description:
                "We don’t just offer mental health care, we encourage it and ensure our staff are well supported. We make sure a number of our staff are mental health aid trained, and we always put health first.",
            },
          ].map(({ icon, title, description }) => (
            <div key={title}>
              <div>icon</div>
              <div>{title}</div>
              <div>{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
