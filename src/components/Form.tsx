import styled from "styled-components";
import {
	StyledFormButton,
	StyledFormInput,
	StyledFormSelect,
} from "./FormElements.tsx";

const StyledForm = styled.form`
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

			<StyledFormSelect>
				{Array.from({ length: 20 }, (_, index) => index + 1).map((opt) => (
					<option value={opt}>{opt}</option>
				))}
			</StyledFormSelect>

			<StyledFormInput
				type="text"
				placeholder="Item..."
			/>

			<StyledFormButton>Add</StyledFormButton>
		</StyledForm>
	);
}

export default Form;
