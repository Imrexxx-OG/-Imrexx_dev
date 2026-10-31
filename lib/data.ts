// Everything you'll want to edit lives in this file.
// No JSX to touch for routine updates — add an object, the page re-renders it.

export type ValueIcon = "compass" | "shield" | "sprout" | "feather";

export type Value = {
  title: string;
  description: string;
  icon: ValueIcon;
};

// Who you are, not just what you do. Edit freely — this is your call.
export const values: Value[] = [
  {
    title: "Builder's mindset",
    description:
      "I'd rather ship something small than talk about something big. Everything on this site exists because I built it.",
    icon: "compass",
  },
  {
    title: "Straight answers",
    description:
      "If something isn't working, I'll say so before you find out the hard way. No padding it to sound nicer.",
    icon: "shield",
  },
  {
    title: "Plays the long game",
    description:
      "I'd rather compound slowly and build something durable than chase a quick spike. Same logic I apply to products I'd actually use.",
    icon: "sprout",
  },
  {
    title: "Work for outcomes",
    description:
      "I'd rather be judged on what shipped than hours logged. That's how I take on work and how I'd want to be measured.",
    icon: "feather",
  },
];

export type ServiceIcon = "code" | "pen" | "megaphone" | "chart";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

// Edit this list freely — reorder, rename, add, or remove a service.
// icon options: "code" | "pen" | "megaphone" | "chart"
export const services: Service[] = [
  {
    title: "Software development",
    description:
      "Full-stack builds — web apps, dashboards, and on-chain tooling. React, Next.js, Node.js, PostgreSQL.",
    icon: "code",
  },
  {
    title: "Content creation",
    description:
      "Build-in-public threads and posts that read like they came from someone who actually built the thing.",
    icon: "megaphone",
  },
  {
    title: "Technical writing",
    description:
      "Docs, explainers, and long-form pieces (Mirror.xyz and similar) that make a protocol or product understandable to a technical reader.",
    icon: "pen",
  },
  {
    title: "Growth strategy",
    description:
      "Posting systems and account strategy for builders — informed by running this account, not theory.",
    icon: "chart",
  },
];

export type ShippedItem = {
  name: string;
  tag: "Live" | "Beta" | "Archived";
  category: "Web3" | "Product";
  description: string;
  visitUrl?: string; // leave empty ("") if not ready to link yet
  codeUrl?: string;
};

// Add a new shipped item any time you ship something worth showing.
export const shipped: ShippedItem[] = [
  {
    name: "IMREXX HUB",
    tag: "Live",
    category: "Web3",
    description:
      "A Lukso blockchain dApp, redesigned with a full dark design system for recruiter and hackathon audiences.",
    visitUrl: "https://imrexx-hub.vercel.app/", 
    codeUrl: "https://github.com/Imrexxx-OG/imrexxHub",
  },
  {
    name: "FreelanceFlow",
    tag: "Live",
    category: "Product",
    description:
      "Invoicing and client management for freelancers — auth, clients, invoices, analytics, payments.",
    visitUrl: "https://freelanceflow-frontend.vercel.app/dashboard",
    codeUrl: "https://github.com/Imrexxx-OG/freelanceflow",
  },
  {
    name: "DevPortGen",
    tag: "Live",
    category: "Product",
    description:
      "AI-powered portfolio generator for developers — GitHub OAuth, GitHub API, AI-generated bios, instant publishing.",
    visitUrl: "https://dev-port-gen.vercel.app/",
    codeUrl: "https://github.com/Imrexxx-OG/DevPortGen",
  },
];

export type Vouch = {
  name: string;
  handle: string; // without the @
  quote: string;
  avatar?: string; // optional — "/avatars/dargonne.jpg" or a full https:// URL. Leave empty for an initial-letter circle.
};

// Add a new vouch any time someone's willing to be quoted.
// Keep quotes close to what they actually said — this only works if it's real.
//
// To add a photo: drop the image file in /public/avatars/ (e.g. public/avatars/dargonne.jpg)
// and set avatar to "/avatars/dargonne.jpg" — or just paste a direct image URL.
export const vouches: Vouch[] = [
  {
    name: "Dargonne",
    handle: "digi_dargonne",
    quote:
      "We built together for a hackathon. Fast with the dev work, good under pressure. Looking forward to working together again.",
    avatar: "/avatars/digi_dargonne.jpg", // e.g. "/avatars/dargonne.jpg"
  },
  {
    name: "Niels",
    handle: "Web3Niels",
    quote:
      "Solid content work. Understands the web3 space and delivers without needing hand-holding. Would recommend.",
    avatar: "/avatars/web3niels.jpg", // e.g. "/avatars/niels.jpg"
  },
  {
    name: "Kenny",
    handle: "wydagoat",
    quote:
      "I would recommend Imrexx to any founder looking to grow their community in the space. He's been a great partner to work with.",
    avatar: "/avatars/wydagoat.jpg", // e.g. "/avatars/kenny.jpg"
  },
  {
    name: "Malik",
    handle: "resmaliks",
    quote:
      "Been working with Imrexx on content for a while now. Quality is consistent and he gets the brief without much back and forth.",
    avatar: "/avatars/resmaliks.jpg", // e.g. "/avatars/malik.jpg"
  },
];

export const social = {
  x: "https://x.com/Imrexx_dev",
  github: "https://github.com/Imrexxx-OG",
  email: "imrandamare@gmail.com",
};

// Shown as a small pill in the hero. Set open: false to hide the dot/label
// (e.g. when you're fully booked) without deleting the content.
export const availability = {
  open: true,
  label: "Open to new projects",
};

export type ProcessStep = {
  title: string;
  description: string;
};

// How a project with you actually goes, step by step. Edit freely.
export const process: ProcessStep[] = [
  {
    title: "Discovery call",
    description:
      "A short call or thread to understand what you need, your timeline, and whether I'm the right fit.",
  },
  {
    title: "Scope & quote",
    description:
      "A written scope with what's included, a timeline, and a fixed price or rate before anything starts.",
  },
  {
    title: "Build, with check-ins",
    description:
      "Regular updates as it's built — not a black box until the deadline. You see progress as it happens.",
  },
  {
    title: "Ship & handover",
    description:
      "Deployed, documented, and handed over cleanly. Available for fixes and follow-up work after launch.",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

// Grouped tech list for a quick capability scan. Edit freely.
export const stack: StackGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { label: "Web3", items: ["Lukso", "Solidity", "Wallet integrations"] },
];

export type Faq = {
  question: string;
  answer: string;
};

// Edit freely — add the question you get asked most.
export const faqs: Faq[] = [
  {
    question: "Do you work with remote or international clients?",
    answer:
      "Yes. Remote-first, async-friendly, and comfortable working across time zones.",
  },
  {
    question: "What's a typical turnaround?",
    answer:
      "Depends on scope — a small build is days, a full product is weeks. You get a real timeline in the quote, not a guess.",
  },
  {
    question: "Do you only build web3 products?",
    answer:
      "No — full-stack web apps, dashboards, and ordinary product work too. Web3 is part of what I do, not all of it.",
  },
  {
    question: "How do we start?",
    answer:
      "DM on X or send an email with what you're trying to build. I'll reply with questions or a quote, not a sales call you didn't ask for.",
  },
];

// Shown in the hero stats row. "sinceLabel"/"sinceValue" is a fixed fact,
// the other two are computed live from the arrays above.
export const buildingSince = "2022";
