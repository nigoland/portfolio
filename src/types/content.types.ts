import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>; // Narrow to string keys for React usage

/**
 * Represents a person featured in the portfolio.
 */
export type Person = {
  /** First name of the person */
  firstName: string;
  /** Last name of the person */
  lastName: string;
  /** The name you want to display, allows variations like nicknames */
  name: string;
  /** Role or job title */
  role: string;
  /** Path to avatar image */
  avatar: string;
  /** Email address */
  email: string;
  /** IANA time zone location */
  location: IANATimeZone;
  /** Languages spoken */
  languages?: string[];
  /**
   * BCP 47 language tag for the HTML lang attribute (e.g., 'en', 'ja', 'zh-TW').
   * Defaults to 'en' if not set.
   * See: https://www.iana.org/assignments/language-subtag-registry
   */
  locale?: string;
};

/**
 * Newsletter Section
 * @description The below information will be displayed on the Home page in Newsletter block
 */
export type Newsletter = {
  /** Whether to display the newsletter section */
  display: boolean;
  /** Title of the newsletter   */
  title: React.ReactNode;
  /** Description of the newsletter */
  description: React.ReactNode;
};

/**
 * Social link configuration.
 */
export type Social = Array<{
  /** Name of the social platform */
  name: string;
  /** Icon for the social platform
   * The icons are a part of "src/resources/icons.ts" file.
   * If you need a different icon, import it there and reference it everywhere else
   */
  icon: IconName;
  /**
   * The link to the social platform
   *
   * The link is not validated by code, make sure it's correct
   */
  link: string;
  /** Whether this social link is essential and should be displayed on the about page */
  essential?: boolean;
}>;

/**
 * Base interface for page configuration with common properties.
 */
export interface BasePageConfig {
  /** Path to the page
   *
   * The path should be relative to the public directory
   */
  path: `/${string}` | string;
  /** Label for navigation or display */
  label: string;
  /** Title of the page */
  title: string;
  /** Description for SEO and metadata */
  description: string;
  /** OG Image should be put inside `public/images` folder */
  image?: `/images/${string}` | string;
}

/**
 * Home page configuration.
 */
export interface Home extends BasePageConfig {
  /** The image to be displayed in metadata
   *
   * The image needs to be put inside `/public/images/` directory
   */
  image: `/images/${string}` | string;
  /** Small label shown above the logo lockup in the hero, e.g. "Welcome to" */
  eyebrow?: React.ReactNode;
  /** The headline of the home page */
  headline?: React.ReactNode;
  /** Featured badge, which appears above the headline */
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  /** The sub text which appears below the headline */
  subline?: React.ReactNode;
  /** Career story, told as separate paragraphs, shown inside the hero panel */
  story?: string[];
}

/**
 * About page configuration.
 * @description Configuration for the About page, including sections for table of contents, avatar, calendar, introduction, work experience, studies, and technical skills.
 */
export interface About extends BasePageConfig {
  /** Table of contents configuration */
  tableOfContent: {
    /** Whether to display the table of contents */
    display: boolean;
    /** Whether to show sub-items in the table of contents */
    subItems: boolean;
  };
  /** Avatar section configuration */
  avatar: {
    /** Whether to display the avatar */
    display: boolean;
  };
  /** Calendar section configuration */
  calendar: {
    /** Whether to display the calendar */
    display: boolean;
    /** Link to the calendar */
    link: string;
  };
  /** Introduction section */
  intro: {
    /** Whether to display the introduction */
    display: boolean;
    /** Title of the introduction section */
    title: string;
    /** Description of the introduction section */
    description: React.ReactNode;
  };
  /** Work experience section */
  work: {
    /** Whether to display work experience */
    display: boolean;
    /** Title for the work experience section */
    title: string;
    /** List of work experiences */
    experiences: Array<{
      /** Company name */
      company: string;
      /** Timeframe of employment */
      timeframe: string;
      /** Role or job title */
      role: string;
      /** One-line company description, shown above achievements, not as a bullet */
      description?: React.ReactNode;
      /** Achievements at the company */
      achievements: React.ReactNode[];
      /** Images related to the experience */
      images?: Array<{
        /** Image source path */
        src: string;
        /** Image alt text */
        alt: string;
        /** Image width ratio */
        width: number;
        /** Image height ratio */
        height: number;
      }>;
    }>;
  };
  /** Studies/education section */
  studies: {
    /** Whether to display studies section */
    display: boolean;
    /** Title for the studies section */
    title: string;
    /** List of institutions attended */
    institutions: Array<{
      /** Institution name */
      name: string;
      /** Description of studies */
      description: React.ReactNode;
    }>;
  };
  /** Technical skills section */
  technical: {
    /** Whether to display technical skills section */
    display: boolean;
    /** Title for the technical skills section */
    title: string;
    /** List of technical skills */
    skills: Array<{
      /** Skill title */
      title: string;
      /** Skill description */
      description?: React.ReactNode;
      /** Skill tags */
      tags?: Array<{
        name: string;
        icon?: string;
      }>;
      /** Images related to the skill */
      images?: Array<{
        /** Image source path */
        src: string;
        /** Image alt text */
        alt: string;
        /** Image width ratio */
        width: number;
        /** Image height ratio */
        height: number;
      }>;
    }>;
  };
}

/**
 * Brands/clients featured on the home page, grouped by the career phase they belong to
 * (e.g. Product Design, Marketing, Advertising).
 */
export type Brands = Array<{
  /** Career phase or discipline this group of brands belongs to */
  category: string;
  /** One-line summary of the work done in this category */
  description: React.ReactNode;
  /** Brands/clients within this category */
  items: Array<{
    /** Brand/client name, used as alt text and fallback label */
    name: string;
    /** Path to the brand's logo, inside `/public/images/` */
    logo: string;
  }>;
}>;

/**
 * "Get in touch" modal configuration, triggered from the nav's "Send message" action,
 * and reused by the home page's closing "Let's connect" section.
 */
export type Connect = {
  /** Small label above the title, e.g. "Let's connect" */
  eyebrow: string;
  /** Modal title, e.g. "Get in touch" */
  title: string;
  /** Supporting copy shown below the contact options */
  description: React.ReactNode;
  /** Email address, used for the mailto: link */
  email: string;
  /** LinkedIn contact option */
  linkedin: {
    /** Value line shown in the modal, e.g. "Connect with Dedi" */
    label: string;
    /** LinkedIn profile URL */
    link: string;
  };
  /** Resume/CV download link */
  resume: {
    label: string;
    link: string;
  };
  /** Roles/arrangements Dedi is currently open to, shown on the home page */
  openTo: string[];
};

/**
 * "Experience across industries and countries" section on the home page: an intro
 * followed by the categorized brand/client groups.
 */
export type ExperienceSection = {
  /** Section title, e.g. "Experience across industries and countries" */
  title: string;
  /** Supporting line under the title */
  subtitle: string;
  /** Categorized brand/client groups */
  groups: Brands;
};

/**
 * "Core expertise" section on the home page: skill categories, each backed by a short
 * capability statement and a set of scannable keyword tags.
 */
export type Expertise = {
  /** Section title, e.g. "Core expertise of Dedi" */
  title: string;
  /** Supporting line under the title */
  subtitle: string;
  /** Skill categories, each rendered as its own card */
  categories: Array<{
    /** Category name, e.g. "Product Strategy" */
    title: string;
    /** One capability statement: what Dedi does, not a project retelling */
    description: React.ReactNode;
    /** Scannable keyword tags for this category */
    tags: string[];
  }>;
};

/**
 * Blog page configuration.
 * @description Configuration for the Blog page, including metadata and navigation label.
 */
export interface Blog extends BasePageConfig {}

/**
 * Work/projects page configuration.
 * @description Configuration for the Work/Projects page, including metadata and navigation label.
 */
export interface Work extends BasePageConfig {}

/**
 * Gallery page configuration.
 * @description Configuration for the Gallery page, including metadata, navigation label, and image list.
 */
export interface Gallery extends BasePageConfig {
  /** List of images in the gallery */
  images: Array<{
    /** Image source path */
    src: string;
    /** Image alt text */
    alt: string;
    /** Image orientation (horizontal/vertical) */
    orientation: string;
  }>;
}
