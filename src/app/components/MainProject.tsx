import { Project } from "../types";

type MainProjectProps = {
  project: Project;
};

export default function MainProject({ project }: MainProjectProps) {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white text-black rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-6">{project.description}</p>
      <a
        href={project.link}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check it out
      </a>
    </div>
  );
}
