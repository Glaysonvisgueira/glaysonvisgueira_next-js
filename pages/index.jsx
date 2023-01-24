import React from "react";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";

export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<SobreMimPage />
			<PortfolioPage />
			<ExperienciaPage />
			<FooterPage />
		</>
	);
}
