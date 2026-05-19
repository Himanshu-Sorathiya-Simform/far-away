import styled from "styled-components";
import { initialItems } from "../data/data.ts";
import PackingItem from "./PackingItem.tsx";

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

function PackingList() {
	return (
		<StyledPackingListContainer>
			<StyledPackingList>
				{initialItems.map((item) => (
					<PackingItem item={item} />
				))}
			</StyledPackingList>
		</StyledPackingListContainer>
	);
}

export default PackingList;
