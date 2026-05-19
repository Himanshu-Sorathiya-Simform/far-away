import styled from "styled-components";

const StyledPackingList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 3.2rem;

	padding: 4rem 0;
	background-color: #5a3e2b;
	color: #ffebb3;
`;

function PackingList() {
	return <StyledPackingList>LIST</StyledPackingList>;
}

export default PackingList;
