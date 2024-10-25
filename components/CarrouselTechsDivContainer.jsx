//Third's librarys
import styled from "styled-components";

//Custom components
import CarrouselTechs from "@/components/CarrouselTechs";

const SpaceDiv = styled.div`
	margin: 20px 0;
	width: 100%;
`;

export default function CarrouselTechsDivContainer({ direction }) {
	return <SpaceDiv>{direction === "left" ? <CarrouselTechs direction="left" speed={50} /> : <CarrouselTechs direction="right" speed={50} />}</SpaceDiv>;
}
