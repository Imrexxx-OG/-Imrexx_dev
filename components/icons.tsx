// Small inline icon set — kept as plain SVG so there's no icon-library dependency.
import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} strokeWidth={0} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.3 2H21l-6.7 7.6L22.2 22h-6.7l-5.2-6.8L4.3 22H1.6l7.2-8.2L1 2h6.9l4.7 6.2L18.3 2Zm-1.2 18h1.9L7 4h-2l12.1 16Z" />
  </svg>
);

export const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} strokeWidth={0} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 5 3.24 9.24 7.74 10.74.57.1.78-.25.78-.55v-2.1c-3.15.69-3.81-1.36-3.81-1.36-.52-1.3-1.26-1.65-1.26-1.65-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.72-1.52-2.52-.29-5.16-1.26-5.16-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.58.23 2.75.12 3.04.73.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.17 5.59.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.75 10.75 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
  </svg>
);

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </svg>
);

export const ExternalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base({ width: 14, height: 14, ...props })}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base({ width: 14, height: 14, ...props })}>
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </svg>
);

export const WrenchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M14.7 6.3a4 4 0 0 0-5.3 4.9L3 17.6V21h3.4l6.4-6.4a4 4 0 0 0 4.9-5.3l-2.8 2.8-2-2 2.8-2.8Z" />
  </svg>
);

export const PenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

export const MegaphoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5h2l-1-5h3l6 4V6l-6 4H6a2 2 0 0 0-2 2Z" />
  </svg>
);

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M4 20V10" />
    <path d="M11 20V4" />
    <path d="M18 20v-7" />
  </svg>
);

export const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M12 3 4.5 6v6c0 4.5 3 7.4 7.5 9 4.5-1.6 7.5-4.5 7.5-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 6-6 2 2-6Z" />
  </svg>
);

export const SproutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M12 21V11" />
    <path d="M12 11C12 7 9 5 5 5c0 4 2 7 7 7Z" />
    <path d="M12 13c0-4.5 3-6 7-6 0 4.5-2.5 7-7 7" />
  </svg>
);

export const FeatherIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M20.2 3.8c-3.5 0-9 1.5-12 4.5-3 3-4.5 9-4.5 12 3 0 9-1.5 12-4.5s4.5-8.5 4.5-12Z" />
    <path d="M14 10 4.5 19.5" />
  </svg>
);
