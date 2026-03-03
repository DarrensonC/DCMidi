import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { lpGestaoTrafego } from "@/content/landing";

export const metadata: Metadata = {
  title: "Gestão de Tráfego Pago",
  description:
    "Atraia clientes qualificados todos os dias com Gestão Profissional de Tráfego Pago — DC Mídias.",
};

export default function Page() {
  return <LandingPage config={lpGestaoTrafego} />;
}


