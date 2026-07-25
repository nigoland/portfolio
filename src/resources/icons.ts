import { IconType } from "react-icons";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiArrowUpRightDuotone,
  PiArrowRightDuotone,
  PiEnvelopeDuotone,
  PiGlobeDuotone,
  PiLinkSimpleDuotone,
  PiCalendarDotsDuotone,
  PiEyeDuotone,
  PiEyeSlashDuotone,
  PiFileTextDuotone,
  PiRocketLaunchDuotone,
  PiArrowSquareOutDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

// Generic UI icons are standardised on Phosphor Duotone. Brand/logo icons
// (below) keep their official marks rather than being reinterpreted.
export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: PiArrowUpRightDuotone,
  arrowRight: PiArrowRightDuotone,
  email: PiEnvelopeDuotone,
  globe: PiGlobeDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: PiLinkSimpleDuotone,
  calendar: PiCalendarDotsDuotone,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: PiEyeDuotone,
  eyeOff: PiEyeSlashDuotone,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: PiArrowSquareOutDuotone,
  document: PiFileTextDuotone,
  rocket: PiRocketLaunchDuotone,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
