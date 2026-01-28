export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const solutionItems: SolutionItem[] = [
  {
    id: "charts",
    number: "01",
    title: "Visual Progress & Insight Charts",
    description:
      "Understand client progress at a glance with clear nutrition and consumption charts that turn raw data into actionable insights for better recommendations.",
    image: "/images/feature-charts.jpg",
  },
  {
    id: "pdf",
    number: "02",
    title: "One-Click PDF Report Export",
    description:
      "Generate clean, professional nutrition reports instantly in PDF format—ready to share with clients after every consultation or follow-up.",
    image: "/images/feature-pdf.jpg",
  },
  {
    id: "profile",
    number: "03",
    title: "Secure Client Profiles",
    description:
      "Store personal data, nutrition history, and recall records securely in one centralized system, making long-term client tracking simple and reliable.",
    image: "/images/feature-profile.jpg",
  },
];
