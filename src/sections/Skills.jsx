import RainbowCard from "../components/RainbowCard";
import { VelocityScroll } from "../components/VelocityScroll";

const Skills = () => {
  let skills = [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Dart",
    "Flutter",
    "Golang",
    "Python",
    "Java",
    "SQL",
    "NoSQL",
    "AWS",
    "GCP",
    "Firebase",
    "Docker",
    "Kubernetes",
    "Serverless Framework",
  ];
  return (
    <section className="relative flex w-[100vw] m-auto h-screen flex-col items-center justify-center overflow-hidden reveal-section zoom-in slow">
      <h2 className="text-7xl font-medium tracking-tight mb-3 ">My Skills</h2>
      <VelocityScroll numRows={3} defaultVelocity={0.5}>
        {skills.map((skill) => (
          <span className="text-5xl py-5 px-8 text-black bg-white w-fit mx-1.5 rounded-lg inline-block">
            {skill}
          </span>
        ))}
      </VelocityScroll>
      {/* Left blur effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* Right Blur Effect */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/70 to-transparent"></div>
    </section>
  );
};
export default Skills;
