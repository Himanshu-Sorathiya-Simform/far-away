import styled from "styled-components";
import type { Item } from "../types/types.ts";

interface PackingItemProps {
	item: Item;
	onDeleteItem: (id: number) => void;
	onTogglePackedItem: (id: number) => void;
}

const StyledPackingItem = styled.li`
	display: flex;
	align-items: center;
	gap: 1.2rem;
`;

const StyledPackingItemDetail = styled.span<{ $packed?: boolean }>`
	text-decoration: ${(props) => [props.$packed ? "line-through" : "none"]};
`;

const StyledPackingItemButton = styled.button`
	padding: 0.8rem;
	background: none;
	border: none;
	font-size: 1.8rem;
	cursor: pointer;

	transform: translateY(2px);
`;

const StyledCheckbox = styled.input.attrs(() => ({ type: "checkbox" }))`
	height: 2rem;
	width: 2rem;
	accent-color: var(--color-logo);
	cursor: pointer;
`;

function PackingItem({ item, onDeleteItem, onTogglePackedItem }: PackingItemProps) {
	return (
		<StyledPackingItem>
			<StyledCheckbox
				checked={item.packed}
				onClick={() => onTogglePackedItem(item.id)}
			/>

			<StyledPackingItemDetail $packed={item.packed}>
				{item.quantity} {item.description}
			</StyledPackingItemDetail>

			<StyledPackingItemButton onClick={() => onDeleteItem(item.id)}>
				❌
			</StyledPackingItemButton>
		</StyledPackingItem>
	);
}

export default PackingItem;
