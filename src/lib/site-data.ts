export const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Credentials", href: "#credentials", id: "credentials" },
  { label: "Insights", href: "#insights", id: "insights" },
  { label: "Training", href: "#training", id: "training" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const heroStages = [
  {
    heading: "YOUR REPUTATION IS YOUR MOST VALUABLE ASSET.",
    body: "Strategic counsel for the conversations that shape how the world sees you.",
  },
  {
    heading: "WHEN THE CALL COMES, YOU NEED TO KNOW EXACTLY WHAT TO SAY.",
    body: "Crisis strategy, media response, and reputation recovery when the stakes are at their highest.",
  },
  {
    heading: "YOUR MISSION DESERVES THE SAME RIGOUR AS ANY BOARDROOM.",
    body: "Communications counsel for churches, ministries, and faith-based organisations.",
  },
  {
    name: "LYALL MERCER",
    descriptor: "Corporate PR. Crisis communications. Faith-based counsel.",
    subtext: "25 years of strategic communications across every continent.",
  },
] as const;

export const asSeenIn = [
  "ABC NEWS",
  "THE AUSTRALIAN",
  "SKY NEWS",
  "AFR",
  "ABC RADIO",
] as const;

export const expertiseColumns = [
  {
    title: "Crisis Communications",
    description:
      "When your reputation is under threat, the first 15 minutes determine everything. Lyall provides the strategic framework, media response capability, and calm authority that organisations need when the stakes are highest.",
    services: [
      "Crisis communications strategy",
      "Crisis prevention consultancy",
      "Vulnerability assessments",
      "Crisis communications planning",
      "Crisis communications coordination",
    ],
  },
  {
    title: "Corporate Communications & Public Relations",
    description:
      "Reputation is built long before a crisis hits. Lyall works with leadership teams to build the stakeholder relationships, media positioning, and communications frameworks that protect and grow organisational value.",
    services: [
      "Internal and external stakeholder engagement",
      "Media relations",
      "Reputation and issues management",
    ],
  },
  {
    title: "Faith-Based Communications",
    description:
      "Churches, ministries, and faith-based organisations face the same communications challenges as any corporation, but with added complexity around community trust, pastoral care, and mission alignment. Lyall brings corporate-grade rigour to mission-driven organisations.",
    services: [
      "Christian ministries, churches, and organisations",
      "Christian schools",
      "Crisis communication planning and coordination",
    ],
  },
] as const;

export const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "15+", label: "Industries Served" },
  { value: "100%", label: "Client Retention" },
] as const;

export const caseStudies = [
  {
    context: "NATIONAL ASSOCIATION",
    situation: "Regulatory Threat",
    description:
      "Guided the board through a six-month advocacy campaign that resulted in the amendment of proposed legislation.",
    result: "Legislation Amended",
  },
  {
    context: "PRIVATE EDUCATION GROUP",
    situation: "Reputation Crisis",
    description:
      "Managed media response and parent communications during a high-profile incident affecting a leading educational institution.",
    result: "Zero Enrolment Loss",
  },
  {
    context: "PACIFIC GOVERNMENT",
    situation: "International Relations",
    description:
      "Provided strategic counsel on stakeholder engagement for a Pacific government navigating complex international relations.",
    result: "Funding Secured",
  },
] as const;

export const insights = [
  {
    slug: "15-minutes",
    title: "15 Minutes",
    excerpt:
      "15 minutes is the time your company has to respond to an emerging crisis before you start to lose control of the message.",
  },
  {
    slug: "bad-news",
    title: "Bad News",
    excerpt:
      "While it is never nice to share bad news, it is easier when your company or organisation has the trust of your publics.",
  },
  {
    slug: "culture",
    title: "Culture",
    excerpt:
      "You can say anything about your company, organisation or brand, but can you back up the words with action and substance?",
  },
] as const;

export const routingCards = [
  {
    eyebrow: "FOR ORGANISATIONS THAT NEED EXPERT COUNSEL",
    title: "CRC Public Relations",
    description:
      "Strategic counsel, crisis management, media relations, and reputation advisory. Lyall leads CRC PR, a corporate PR firm that excels when the stakes are high. Retainer and project-based engagements for organisations that need senior-level support.",
    cta: "Book a Confidential Consultation",
    href: "https://crcpr.com.au/contact",
    accentClass: "border-gold",
  },
  {
    eyebrow: "FOR TEAMS THAT WANT TO BUILD THEIR OWN CAPABILITY",
    title: "My PR Partner",
    description:
      "World-class PR training and crisis communications courses, backed by 25 years of consulting experience. Practical skills your team can apply immediately without the cost of a full retainer.",
    cta: "Start Training",
    href: "https://myprpartner.com",
    accentClass: "border-teal",
    note: "Powered by CRC PR",
  },
] as const;

export const enquiryTypes = [
  "Advisory / Consulting",
  "Media / Commentary",
  "Speaking / Workshop",
  "Training / My PR Partner",
  "Other",
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    placeholder: true,
  },
  {
    label: "X",
    href: "#",
    placeholder: true,
  },
] as const;
