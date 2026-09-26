import { About, Blog, Brands, Connect, Expertise, ExperienceSection, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

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

const connect: Connect = {
  eyebrow: "Let's connect",
  title: "Get in touch",
  description: (
    <>Let's build something meaningful together. Great work starts with a great conversation.</>
  ),
  email: person.email,
  linkedin: {
    label: `Connect with ${person.firstName}`,
    link: social.find((item) => item.name === "LinkedIn")?.link ?? "",
  },
  resume: {
    label: "Resume",
    link: "https://www.dropbox.com/scl/fi/v9md7cfthdj86vbpmtyv4/CV_DediNigolan_2026.pdf?rlkey=mvwkb03dzygragisqd3xb79ju&st=9if2rz89&dl=1",
  },
  openTo: [
    "Product design lead",
    "Senior product designer",
    "Co-founder",
    "Design partner",
    "Other interesting ventures",
  ],
};

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg", // fallback only, actual OG image is generated dynamically in layout.tsx/page.tsx
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  eyebrow: "Welcome to",
  featured: {
    display: true,
    title: "Featured work",
    href: "/work/exchange-solutions-design-system",
  },
  story: [
    "Nigoland is the interactive world Dedi has been building throughout his career. Its latest chapter is institutional fintech, where Dedi works as a Product Design Lead, shaping the SaaS exchange solutions that banks, exchanges and financial institutions run on.",
    "The eye behind that work was trained years earlier in 2012, when Dedi began as a creative designer in advertising, branding and marketing. Same instinct for composition and clarity, just on a different canvas.",
  ],
};

// Institutional clients and brands, grouped by the career phase they belong to.
const experience: ExperienceSection = {
  title: "Experience across industries and countries",
  subtitle:
    "Built products and brands with teams across Indonesia, Singapore, Malaysia, Vietnam, China and Japan.",
  groups: [
    {
      category: "Product Design",
      description: "Built the exchange system for 2 of 3 Singapore national banks and a digital exchange.",
      items: [
        { name: "DBS", logo: "/images/nigoland/badge-logo-dbs.png" },
        { name: "OCBC", logo: "/images/nigoland/badge-logo-ocbc.png" },
        { name: "SDAX", logo: "/images/nigoland/badge-logo-sdax.png" },
      ],
    },
    {
      category: "Marketing",
      description: "Led lead-generation campaigns across Indonesia, Singapore, Malaysia and Vietnam.",
      items: [
        { name: "SAP", logo: "/images/nigoland/badge-logo-sap.png" },
        { name: "TDI APJ", logo: "/images/nigoland/badge-logo-tdiapj.png" },
        { name: "DJARUM", logo: "/images/nigoland/badge-logo-djarum.png" },
      ],
    },
    {
      category: "Advertising",
      description: "Crafted advertising campaigns for international brands.",
      items: [
        { name: "Air Asia", logo: "/images/nigoland/badge-logo-airasia.png" },
        { name: "Milo", logo: "/images/nigoland/badge-logo-milo.png" },
        { name: "7 Eleven", logo: "/images/nigoland/badge-logo-7eleven.png" },
      ],
    },
  ],
};

// "Core expertise" cards on the home page: one capability per card, backed by scannable tags.
const expertise: Expertise = {
  title: "Core expertise of Dedi",
  subtitle: "The core skills behind Dedi's product work, from strategy to craft.",
  categories: [
    {
      title: "Product Strategy",
      description: <>Converts ambiguous requirements into roadmaps and 0-to-1 shipped SaaS products.</>,
      tags: ["Product Strategy", "Design Systems", "0-to-1 Product Design"],
    },
    {
      title: "AI Design Workflow",
      description: (
        <>
          Turns raw requirements into structured PRDs, then into prototypes, using an AI-assisted
          workflow that cuts design cycles in half.
        </>
      ),
      tags: ["AI-Assisted Prototyping", "Generative AI Workflows", "Rapid Prototyping"],
    },
    {
      title: "Cross-Functional Leadership",
      description: (
        <>Builds design teams from the ground up and leads cross-functional delivery across Product and Engineering.</>
      ),
      tags: ["Cross-Functional Collaboration", "Agile/Scrum", "Team Leadership"],
    },
    {
      title: "Marketing",
      description: <>Drives rebrand initiatives and marketing event programs across multiple industries.</>,
      tags: ["Brand Strategy", "Event Marketing", "Partnerships"],
    },
    {
      title: "Art Direction",
      description: <>Directs photography, video and brand identity.</>,
      tags: ["Art Direction", "Photography & Videography", "Visual Identity"],
    },
  ],
};

const about: About = {
  path: "/about",
  label: "About Dedi",
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
  label: "Projects",
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

export { person, social, newsletter, home, about, blog, work, gallery, experience, connect, expertise };
