type HomeProps = {
  cmsData: {
    projects: Project[];
  };
};

import { Project } from "../types";
import MainProject from "./MainProject";
import ProjectCard from "./ProjectCard";

export function LandingPage({ cmsData }: HomeProps) {
  const { projects } = cmsData;
  return (
    <div>
      <MainProject project={projects[0]} />
      <div className="flex flex-wrap justify-center">
        {projects.slice(1).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
