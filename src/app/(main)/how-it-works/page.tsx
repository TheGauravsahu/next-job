import React from "react";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Create an Account",
      description:
        "Sign up as a job seeker or employer to access the platform.",
    },
    {
      title: "Post or Browse Jobs",
      description:
        "Employers can post job listings and job seekers can browse available opportunities.",
    },
    {
      title: "Apply or Hire",
      description:
        "Job seekers apply directly to job posts and employers can manage applications.",
    },
    {
      title: "Get Hired",
      description:
        "Connect with the right opportunity and start your new journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-grid-black  py-24 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold md:leading-16.5 leading-14">
          How
          <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {" "}
            NextJob{" "}
          </span>
          Works
        </h1>
        <p className="text-lg dark:text-gray-300">
          A simple process to connect job seekers with great opportunities.
        </p>
      </div>

      <div className="space-y-10 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl shadow-lg border border-white/10"
          >
            <div className="flex-shrink-0 cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
