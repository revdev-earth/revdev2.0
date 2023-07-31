export default function Cases() {
  return (
    <div>
      <div>
        <div>CASE STUDIES</div>
        <h1>Driving growth & innovation</h1>
        <h2>
          Our team of experts are dedicated to helping clients navigate the
          complexities of digital transformation to unlock new avenues for
          growth.
        </h2>

        <ul className="flex">
          {["product development", "CRO", "APP", "IOT", "WEB", "BRAND"].map(
            (item) => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
      </div>

      <div>
        {[
          {
            title: "Brass Monkey",
            description:
              "Creating the world's first internet-controlled ice bath",
            tags: ["software", "design", "User Experience"],
          },

          {
            title: "Nexus by Hexagon",
            description:
              "Building a new manufacturing platform and customer portal to drive transformative change",
            tags: ["software", "design", "User Experience"],
          },

          {
            title: "Glencore",
            description:
              "Shifting brand perception through effective digital transformation",
            tags: ["software", "design", "User Experience"],
          },

          {
            title: "Chatloop",
            description:
              "Reinventing web browsing with an innovative social media platform",
            tags: ["software", "design", "User Experience"],
          },
        ].map(({ title, description, tags }) => (
          <div key={title}>
            <div>{title}</div>
            <div>{description}</div>
            <ul>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
