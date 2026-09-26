import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, home, about, person } from "@/resources";
import { cinzel, cormorantGaramond, nigolandInter } from "@/resources/nigolandFonts";
import { Hero, Experience, ProjectTickets, FloralDivider, Expertise } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}`,
  });
}

export default function Home() {
  return (
    <div className={`${cormorantGaramond.variable} ${cinzel.variable} ${nigolandInter.variable}`}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Hero />
      <Experience />
      <ProjectTickets />
      <FloralDivider />
      <Expertise />
    </div>
  );
}
