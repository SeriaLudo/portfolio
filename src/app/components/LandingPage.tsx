import { Project } from "../types";
import MainProject from "./MainProject";
import ProjectCard from "./ProjectCard";
import { Header } from "./Header";
import { Footer } from "./Footer";

type HomeProps = {
  cmsData: {
    siteTitle: string;
    subtitle: string;
    links: { href: string; label: string; active: boolean }[];
    projects: Project[];
    footer: { siteName: string; social: { href: string; label: string }[] };
  };
};

export function LandingPage({ cmsData }: HomeProps) {
  const { siteTitle, subtitle, links, projects, footer } = cmsData;
  return (
    <div>
      <Header siteTitle={siteTitle} subtitle={subtitle} links={links} />
      <MainProject project={projects[0]} />
      <div className="flex flex-wrap justify-center">
        {projects.slice(1).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer siteName={footer.siteName} social={footer.social} />
    </div>
  );
}
