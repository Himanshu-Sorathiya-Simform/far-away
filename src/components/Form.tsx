import { type SubmitEventHandler, useState } from "react";
import styled from "styled-components";
import type { Item } from "../types/types.ts";
import {
	StyledFormButton,
	StyledFormInput,
	StyledFormSelect,
} from "./FormElements.tsx";

interface FormProps {
	onAddItems: (item: Item) => void;
}

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

function Form({ onAddItems }: FormProps) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = function (e) {
		e.preventDefault();

		if (!description) return;

		const newItem: Item = {
			id: Date.now(),
			quantity,
			description,
			packed: false,
		};

		onAddItems(newItem);
		setDescription("");
		setQuantity(1);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledH3>What do you need for your trip?</StyledH3>

			<StyledFormSelect
				value={quantity}
				onChange={(e) => setQuantity(+e.target.value)}
			>
				{Array.from({ length: 20 }, (_, index) => index + 1).map((opt) => (
					<option value={opt}>{opt}</option>
				))}
			</StyledFormSelect>

			<StyledFormInput
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>

			<StyledFormButton>Add</StyledFormButton>
		</StyledForm>
	);
}

export default Form;
