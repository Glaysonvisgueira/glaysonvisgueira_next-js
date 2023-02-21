import React, { useState } from "react";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";
import ConsoleMessage from "@/components/consoleMessage";

let flagMessage = false;
export default function Index() {
	if (flagMessage == false) {
		ConsoleMessage();
		flagMessage = true;
	}

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
