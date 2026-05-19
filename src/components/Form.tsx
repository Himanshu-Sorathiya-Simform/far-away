import styled from "styled-components";

const StyledForm = styled.div`
	background-color: #e5771f;
	padding: 2.8rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
`;

const StyledH3 = styled.h3`
	margin-right: 1.6rem;
	font-size: 2.4rem;
`;

function Form() {
	return (
		<StyledForm>
			<StyledH3>What do you need for your trip?</StyledH3>
		</StyledForm>
	);
}

export default Form;
