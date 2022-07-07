import styled from "styled-components";
import { Parallax } from "react-parallax";

export default function ParalaxTransitionDiv() {
	return <Parallax bgImage="img/man-tech.jpg" bgImageAlt="the cat" strength={200} style={{ width: "100%", height: "450px" }} />;
}
