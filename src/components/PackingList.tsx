import { useState } from "react";
import styled from "styled-components";
import type { Item } from "../types/types.ts";
import PackingItem from "./PackingItem.tsx";
import { StyledButton, StyledSelect } from "./StyledHelperElements.tsx";

interface PackingListProps {
	items: Item[];
	onDeleteItem: (id: number) => void;
	onTogglePackedItem: (id: number) => void;
	onClearList: () => void;
}

const StyledPackingListContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 3.2rem;

	padding: 4rem 0;
	background-color: ${(props) => props.theme.list};
	color: ${(props) => props.theme.accent};
	overflow: hidden;
`;

const StyledPackingList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	justify-content: center;
	align-content: start;
	gap: 1.2rem;

	list-style: none;
	width: 80%;
	overflow: auto;
`;

const StyledActionsContainer = styled.div`
	display: flex;
	align-content: center;
	gap: 1rem;
`;

function PackingList({
	items,
	onDeleteItem,
	onTogglePackedItem,
	onClearList,
}: PackingListProps) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems: Item[] = [];

	if (sortBy === "input") sortedItems = items;
	else if (sortBy === "description")
		sortedItems = items.toSorted((a, b) =>
			a.description.localeCompare(b.description),
		);
	else if (sortBy === "packed")
		sortedItems = items.toSorted((a, b) => +a.packed - +b.packed);

	return (
		<StyledPackingListContainer>
			<StyledPackingList>
				{sortedItems.map((item) => (
					<PackingItem
						item={item}
						onDeleteItem={onDeleteItem}
						onTogglePackedItem={onTogglePackedItem}
					/>
				))}
			</StyledPackingList>

			<StyledActionsContainer>
				<StyledSelect
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">By Input Order</option>
					<option value="description">By Description</option>
					<option value="packed">By Packed Status</option>
				</StyledSelect>

				<StyledButton onClick={onClearList}>Clear List</StyledButton>
			</StyledActionsContainer>
		</StyledPackingListContainer>
	);
}

export default PackingList;
