export default function Expertise() {
  return (
    <div>
      <div>
        <div>About</div>
        <div>We deliver impact through innovation</div>
      </div>

      <div>
        <div>who we are </div>
        <div>
          We’re a digital consultancy, experience and software engineering
          partner.
        </div>
        <div>
          Operating from our HQ in Leeds, we work with ambitious organisations
          worldwide.
        </div>
      </div>

      <div>
        {[
          {
            icon: {
              src: "",
              alt: "",
            },
            title: "Track record",
            description:
              "We’ve delivered over 350 digital products for scale-ups through to global enterprises.",
          },

          {
            icon: {
              src: "",
              alt: "",
            },
            title: "Highly creative",
            description:
              "Our roots are grounded in designing award-winning interactive experiences.",
          },

          {
            icon: {
              src: "",
              alt: "",
            },
            title: "Technically savvy",
            description:
              "Over the years we’ve built a problem-solving and collaborative engineering culture.",
          },

          {
            icon: {
              src: "",
              alt: "",
            },
            title: "Strategic thinkers",
            description:
              "We blend research and strategy to solve complex problems and drive commercial value.",
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
  );
}
