import React, { useState } from "react";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";
//import ContactMeEmail from "@/components/ContactMeEmail";

let flagMessage = false;
export default function Index() {
	function ConsoleMessage() {
		console.log(
			"%c██   ██ ███████ ██      ██       ██████      ██████  ███████ ██    ██ ███████ ██       ██████  ██████  ███████ ██████  ██\n" +
				"%c██   ██ ██      ██      ██      ██    ██     ██   ██ ██      ██    ██ ██      ██      ██    ██ ██   ██ ██      ██   ██ ██\n" +
				"%c███████ █████   ██      ██      ██    ██     ██   ██ █████   ██    ██ █████   ██      ██    ██ ██████  █████   ██████  ██\n" +
				"%c██   ██ ██      ██      ██      ██    ██     ██   ██ ██       ██  ██  ██      ██      ██    ██ ██      ██      ██   ██   \n" +
				"%c██   ██ ███████ ███████ ███████  ██████      ██████  ███████   ████   ███████ ███████  ██████  ██      ███████ ██   ██ ██",
			"color: #FCD434;",
			"color: #FCD434;",
			"color: #FCD434;",
			"color: #FCD434;",
			"color: #FCD434;"
		);

		console.log(
			"%cProcurando o código fonte? Aqui está ele: " + "%chttps://github.com/Glaysonvisgueira/glaysonvisgueira_next-js\n\n" + "%cNão esqueça de deixar uma estrela! 🌟",
			"font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500;",
			"font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500; color: #FCD434;",
			"font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500;"
		);
	}

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
			{/* <ContactMeEmail /> */}
			<FooterPage />
		</>
	);
}
