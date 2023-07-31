import Image from "next/image";

export default function Expertise() {
  return (
    <div>
      <div>
        <h1>Expertise</h1>
        <div>Your digital transformation partner</div>
        <div>
          Guiding you through your digital transformation journey to deliver
          impactful, sustainable results.
        </div>
      </div>

      <div>
        <div>→ OVERVIEW</div>
        <div>
          Our team of experts work with you to collaborate, deliver and scale
          digitally-enabled change.
        </div>
        <div>
          Organisations require innovation to stay competitive in today’s
          landscape. We’ve got the knowledge and experience to maximise
          performance and profitability.
        </div>

        <div className="flex ">
          <div>
            <div>icon</div>
            <div>Increase revenue & profits</div>
          </div>

          <div>
            <div>icon</div>
            <div>Improve customer loyalty</div>
          </div>

          <div>
            <div>icon</div>
            <div>Deliver value & positive impact</div>
          </div>
        </div>

        <div>
          Whatever your goals, from driving customer engagement to reducing
          time-to-market, we{`'`}ll work closely with you to understand your
          challenges, guide objectives, and help you drive successful
          transformation.
        </div>

        <div>
          We{`’`}re able to work as a complete team focused on a development
          roadmap or we can augment your existing in-house teams, ensuring that
          we{`’`}re providing value and helping you achieve your objectives.
        </div>
      </div>

      <div>our solutions</div>

      <div>
        {[
          {
            title: "Digital Transformation Strategy",
            description:
              "Helping you build an actionable roadmap to incorporate innovative digital technologies across all aspects of your organisation.",
            list: [
              "Technology assessment",
              "Change management",
              "Process optimisation",
              "Process automation",
              "Artificial intelligence",
              "Platform integration",
            ],
            image: {
              src: "",
              alt: "",
            },
          },
          {
            title: "AI-Powered Solutions",
            description:
              "We can partner with you to identify innovative opportunities to successfully integrate AI into your operations - and implement solutions refined to your specific business needs.",
            list: [
              "Systems analysis",
              "Research and requirements",
              "Prototyping and testing",
              "Implementation",
              "Refinement and tailoring",
              "Analytics and tracking",
            ],
            image: {
              src: "",
              alt: "",
            },
          },

          {
            title: "Digital Product Development",
            description:
              "Working with you to produce technically-sound, intuitive, and scalable digital products that support your business goals.",
            list: [
              "User research",
              "Product strategy",
              "Prototyping and testing",
              "Customer support services",
              "Content management systems",
              "Continuous improvement",
            ],
            image: {
              src: "",
              alt: "",
            },
          },

          {
            title: "Agile Delivery",
            description:
              "The guidance you need to achieve adaptable and sustainable outcomes that focus on delivering value early and developing the output over time.",
            list: [
              "Iterative design and development",
              "Agile sprint management",
              "Agile retrospectives",
              "Agile testing",
              "Agile risk management",
              "Agile tools and technologies",
            ],
            image: {
              src: "",
              alt: "",
            },
          },

          {
            title: "Agile Delivery",
            description:
              "The guidance you need to achieve adaptable and sustainable outcomes that focus on delivering value early and developing the output over time.",
            list: [
              "Iterative design and development",
              "Agile sprint management",
              "Agile retrospectives",
              "Agile testing",
              "Agile risk management",
              "Agile tools and technologies",
            ],
            image: {
              src: "",
              alt: "",
            },
          },

          {
            title: "IoT Solutions",
            description:
              "We can help you embrace IoT technology to radically improve efficiencies and revolutionise customer experiences.",
            list: [
              "Device connectivity",
              "Machine learning",
              "Device integration",
              "IoT security",
              "Data collection and storage",
              "IoT architecture",
            ],
            image: {
              src: "",
              alt: "",
            },
          },

          {
            title: "Cloud DevOps",
            description:
              "We have perfected a blend of cloud computing and DevOps practices for rapid, scalable, and automated development and deployment.",
            list: [
              "Cloud performance optimisation",
              "Cloud architecture",
              "Infrastructure as code",
              "Containerisation",
              "Cloud governance",
              "Backup and recovery solutions",
            ],
            image: {
              src: "",
              alt: "",
            },
          },
        ].map((item, i) => (
          <div key={item.title}>
            <div>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div>
                <ul>
                  {item.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Image
                src={`/${item.image.src}`}
                alt={`${item.image.alt}`}
                width={50}
                height={50}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div>
          <div>Outcome-oriented and easy to work with</div>
          <div>
            With a focus on creating a problem-solving and collaborative working
            culture, we pride ourselves on being supremely flexible and
            proactive.
          </div>
          <div>
            We work with you to understand your digital transformation needs and
            develop a tailored approach that delivers.
          </div>
          <div>
            <ul>
              <li>Scale quickly with our experienced team</li>
              <li>Seamlessly integrate with your working setup</li>
              <li>Deliver value early and at speed</li>
            </ul>
          </div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
}
