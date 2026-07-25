import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dedi",
  lastName: "Nigolan",
  name: `Dedi Nigolan`,
  role: "Product Design Lead",
  avatar: "/images/avatar.jpg", // TODO: replace with a real photo, see note below
  email: "dedinigolan@gmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/dedinigolan",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg", // fallback only, actual OG image is generated dynamically in layout.tsx/page.tsx
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning complex exchange infrastructure into systems people can actually use</>,
  featured: {
    display: true,
    title: "Featured work",
    href: "/work/exchange-solutions-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} building institutional exchange platforms at{" "}
      <Text as="span" size="xl" weight="strong">Hydra X</Text> in Singapore.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Singapore`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dedi is a Singapore-based product design lead with a background spanning UI/UX, marketing, and
        product ownership in financial technology, most recently rebuilding institutional exchange
        infrastructure end to end. Known for systems-level thinking, connecting complex, interdependent
        pieces of a product into a coherent, human-usable whole, paired with strong design judgment
        grounded in feel: proportion, flow, hierarchy, tone.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Hydra X",
        timeframe: "Feb 2023 - Present",
        role: "Design Lead",
        description: (
          <>
            Exchange platform for banks and financial institutions, handling trading, custody, and
            digital asset issuance.
          </>
        ),
        achievements: [
          <>
            Built a design team of 5 (designers and product managers) from scratch. Now leads 3 product
            squads, ~15 people total.
          </>,
          <>
            Built the team's structure and career-growth framework, mentoring members regularly.
          </>,
          <>
            Rebuilt the design system in 1 month, then rolled it out across 4 products at ~6 weeks each,
            cutting UI bugs and speeding up delivery across design and engineering.
          </>,
          <>
            Built an AI design pipeline that turns PRDs into Figma prototypes, doubling designer output.
            Cut one feature's build time from 12 weeks to 6 weeks using it.
          </>,
          <>
            Introduced design sprints and metric-based user testing as standard process, cutting decision
            time in half.
          </>,
          <>
            Led design across the full B2B exchange suite, custody wallets, settlement, and tokenisation
            under one consistent experience, so operators learned the system once instead of relearning it
            per product.
          </>,
        ],
        images: [],
      },
      {
        company: "TDI APJ",
        timeframe: "Jun 2022 - Dec 2022",
        role: "Regional Marketing Manager",
        description: <>Enterprise SAP/ERP implementation provider serving Southeast Asia.</>,
        achievements: [
          <>
            Solo-led the brand and marketing relaunch across Singapore, Malaysia, and Vietnam
            post-acquisition: rebrand, website, messaging, collateral, partnerships.
          </>,
          <>
            Ran an event every 6 weeks, positioning the company as a thought leader in the space.
          </>,
        ],
        images: [],
      },
      {
        company: "Hydra X",
        timeframe: "Mar 2019 - May 2022",
        role: "UI/UX Designer / Marketing",
        achievements: [
          <>
            Moved from marketing into product design as the business pivoted to B2B, designing 0-to-1
            interfaces that helped land first institutional clients.
          </>,
          <>
            Built the company's first design system from scratch, standardising visual language as the
            product grew.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Singapore Management University",
        description: <>MSc, Business Management, Dean's List Honours (2017-2018)</>,
      },
      {
        name: "University of Northumbria at Newcastle",
        description: <>BA, Advertising, First Class Honours (2014-2015)</>,
      },
      {
        name: "Nanyang Academy of Fine Arts",
        description: <>Diploma, Advertising, Design & Media (2012-2014)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Design systems",
        description: <>Build, scale, and own design systems, from Figma tokens to Storybook documentation.</>,
      },
      {
        title: "AI-assisted prototyping",
        description: (
          <>Built an AI design pipeline (Claude Code) that turns PRDs directly into Figma prototypes.</>
        ),
      },
      {
        title: "Cross-functional leadership",
        description: (
          <>Partners directly with Product, Engineering, and Business to turn requirements into roadmaps and shipped product.</>
        ),
        images: [],
      },
      {
        title: "Team building & mentoring",
        description: (
          <>Built a design team of 5 from scratch and its career-growth framework, mentoring members regularly.</>
        ),
        images: [],
      },
      {
        title: "0-to-1 product design",
        description: (
          <>Designed 0-to-1 interfaces for a multi-asset exchange platform from the ground up.</>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and product case studies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
