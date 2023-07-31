export default function Culture() {
  return (
    <div>
      <div>
        <div>Our culture</div>
        <div>Nurturing Greatness</div>
        <div>
          Our mission is to create an environment where people can grow, feel
          empowered, and produce their best work. We do this by creating a work
          life balance that works, ensuring leaders are visible and accessible
          as well as constantly investing in the growth and training of our
          team.
        </div>
      </div>

      <div>
        {[
          {
            src: "",
            alt: "a",
          },

          {
            src: "",
            alt: "s",
          },

          {
            src: "",
            alt: "d",
          },

          {
            src: "",
            alt: "f",
          },
        ].map(({ src, alt }) => (
          <div key={alt}> image</div>
        ))}
      </div>

      <div>
        <div>Benefits</div>

        {[
          {
            title: "",
            description: "",
          },
        ].map(({ title, description }) => (
          <div key={title}>
            <div>{title}</div>
            <div>{description}</div>
          </div>
        ))}
      </div>

      <div>
        <div>Company focuss</div>
        <div>We’re serious about health & wellbeing</div>
        <div>
          It’s our responsibility to do everything we can to help our employees
          lead healthy, full lives.
        </div>

        <ul>
          <li>
            We offer Bupa premium healthcare cover to all of our staff. This
            includes access to Bupa’s Healthy Minds service which offers support
            from trained experts.
          </li>
          <li>
            We have Mental Health First Aid trained staff who can provide
            tailored support and we offer subsidised counselling if needed, with
            no time limit.
          </li>
          <li>
            We prioritise realistic scheduling to make sure every workload is
            achievable.
          </li>
        </ul>
      </div>
    </div>
  );
}
