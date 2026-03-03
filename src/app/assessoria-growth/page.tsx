import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { lpAssessoriaGrowth } from "@/content/landing";

export const metadata: Metadata = {
  title: "Assessoria de Growth Marketing",
  description:
    "Receba um plano personalizado para vender em escala com previsibilidade e lucro — DC Mídias.",
};

export default function Page() {
  return <LandingPage config={lpAssessoriaGrowth} />;
}


