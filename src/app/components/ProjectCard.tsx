import { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black m-4">
      <h2 className="text-2xl font-semibold mb-2 p-4">{project.title}</h2>
      <p className="p-4">{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a
        href={project.link}
        className="m-4 block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
      >
        Learn More
      </a>
    </div>
  );
}
