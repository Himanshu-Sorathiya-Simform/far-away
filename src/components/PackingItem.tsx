import styled from "styled-components";
import type { Item } from "../types/types.ts";

interface PackingItemProps {
	item: Item;
}

const StyledPackingItem = styled.li<{ $packed?: boolean }>`
	display: flex;
	align-items: center;
	gap: 1.2rem;

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

function PackingItem({ item }: PackingItemProps) {
	return (
		<StyledPackingItem $packed={item.packed}>
			<span>
				{item.quantity} {item.description}
			</span>

			<StyledPackingItemButton>❌</StyledPackingItemButton>
		</StyledPackingItem>
	);
}

export default PackingItem;
