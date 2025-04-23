import React from "react";
import { BriefcaseBusiness, Globe, UserCheck, Rocket } from "lucide-react";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Post Jobs Easily",
    description:
      "Create detailed job posts with required skills, location, and salary in just a few clicks.",
  },
  {
    icon: UserCheck,
    title: "Find Verified Talent",
    description:
      "Access a pool of verified candidates actively looking for jobs in your domain.",
  },
  {
    icon: Globe,
    title: "Reach Globally",
    description:
      "Your job openings are discoverable by job seekers around the world.",
  },
  {
    icon: Rocket,
    title: "Hire Faster",
    description:
      "Streamlined workflows and smart filters help you hire the right talent quickly.",
  },
];

export default function EmployerPage() {
  return (
    <div className="min-h-screen bg-grid-black  py-22 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold md:leading-16.5 leading-14">
          Why Hire with
          <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {" "}
            NextJob{" "}
          </span>
          ?
        </h1>
        <p className="text-lg text-muted-foreground">
          Trusted by startups and enterprises to find the best talent
          effortlessly.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 shadow-lg"
          >
            <div className="bg-blue-600 p-2 rounded-full">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-400 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
