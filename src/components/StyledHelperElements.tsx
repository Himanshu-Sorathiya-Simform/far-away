import styled, { css } from "styled-components";

const commonStyles = css`
	padding: 1.2rem 3.2rem;
	color: ${(props) => props.theme.list};
	background-color: ${(props) => props.theme.accent};
	font-family: inherit;
	font-weight: 700;
	font-size: 1.8rem;
	border: none;
	border-radius: 10rem;
	cursor: pointer;
`;

const StyledButton = styled.button`
	${commonStyles}

	background-color: ${(props) => props.theme.stats};
	text-transform: uppercase;
`;

const StyledSelect = styled.select`
	${commonStyles}
`;

const StyledInput = styled.input.attrs(() => ({
	type: "text",
	placeholder: "Item...",
}))`
	${commonStyles}
`;

export { StyledButton, StyledInput, StyledSelect };
