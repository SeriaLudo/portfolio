import { CMS_NAME } from "@/lib/constants";

export function Intro({
  username = "Data Engineer",
  introText = "I build data pipelines and analytics solutions",
}) {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex flex-col md:mr-8">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          Portfolio
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 md:mb-12">
          {username}
        </h2>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:mt-0 md:pl-8">
        {introText}
      </h4>
    </section>
  );
}
