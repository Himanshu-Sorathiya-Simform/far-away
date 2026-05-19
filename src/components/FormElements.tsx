import styled, { css } from "styled-components";

const commonStyles = css`
	padding: 1.2rem 3.2rem;
	color: #5a3e2b;
	background-color: #ffebb3;
	font-family: inherit;
	font-weight: 700;
	font-size: 1.8rem;
	border: none;
	border-radius: 10rem;
	cursor: pointer;
`;

const StyledFormButton = styled.button`
	${commonStyles}

	background-color: #76c7ad;
	text-transform: uppercase;
`;

const StyledFormSelect = styled.select`
	${commonStyles}
`;

const StyledFormInput = styled.input.attrs((props) => ({
	type: props.type,
	placeholder: props.placeholder,
}))`
	${commonStyles}
`;

export { StyledFormButton, StyledFormInput, StyledFormSelect };
