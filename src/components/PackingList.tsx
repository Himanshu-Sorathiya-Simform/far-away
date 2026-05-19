import styled from "styled-components";
import type { Item } from "../types/types.ts";
import PackingItem from "./PackingItem.tsx";

interface PackingListProps {
	items: Item[];
}

const StyledPackingListContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 3.2rem;

	padding: 4rem 0;
	background-color: #5a3e2b;
	color: #ffebb3;
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

function PackingList({ items }: PackingListProps) {
	return (
		<StyledPackingListContainer>
			<StyledPackingList>
				{items.map((item) => (
					<PackingItem item={item} />
				))}
			</StyledPackingList>
		</StyledPackingListContainer>
	);
}

export default PackingList;
