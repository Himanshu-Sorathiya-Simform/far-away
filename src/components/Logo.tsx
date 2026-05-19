import styled from "styled-components";

const StyledH1 = styled.h1`
	padding: 2.4rem 0;
	background-color: ${(props) => props.theme.logo};
	font-family: "Monoton", sans-serif;
	font-size: 8rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 400;
	word-spacing: 30px;
	letter-spacing: -5px;
`;

function Logo() {
	return <StyledH1>🌴 Far Away 🎒</StyledH1>;
}

export default Logo;
