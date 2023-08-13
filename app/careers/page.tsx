import React from "react";

export default function Careers() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="text-3xl font-bold mb-2">Careers</div>
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          Taking part in the action on the reality!
        </div>
        <div className="w-full h-48 bg-gray-300 mb-4 rounded-lg"></div>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 mt-8 p-8 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-2">Open vacancies</div>
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          Seeking Exciting opportunities, with supportive, collaborative and
          empowering space!
        </div>
        <div className="text-gray-700 mb-4">
          We believe in human value and how enriching it is to have the
          opportunity to be a part of it, especially when challenges are
          available and doors are open, we open the door for you to become a
          part of it. part of it.
        </div>

        <div className="grid gap-6">
          {[
            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Front End",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Backend",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "DevOps",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Graphic Desing",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Videos Maker",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Laws",
              description: "",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex items-start">
              <div className="w-8 h-8 bg-gray-300 mr-4"></div>
              <div>
                <div className="font-bold">{title}</div>
                <div className="text-gray-600 dark:text-gray-400">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-gray-700 mt-4">
          If you like Rev Dev but don’t see an opportunity for you right now,
          please register your interest.
          <button className="ml-2 text-blue-500">Register</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 mt-8 p-8 rounded-lg shadow-lg">
        <div className="text-gray-700 mb-4">
          If you like Rev Dev but don’t see an opportunity for you right now,
          please register your interest.
          <button className="ml-2 text-blue-500">Register</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 mt-8 p-8 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4">Perks & benefits</div>
        <div className="grid gap-6">
          {[
            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Unleash Your Potential",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Flexible, remote working",
              description: "",
            },

            {
              icon: {
                src: "",
                alt: "",
              },
              title: "Top-notch technology",
              description: "",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex items-start">
              <div className="w-8 h-8 bg-gray-300 mr-4"></div>
              <div>
                <div className="font-bold">{title}</div>
                <div className="text-gray-600 dark:text-gray-400">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
