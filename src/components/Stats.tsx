import styled from "styled-components";

const StyledStats = styled.footer`
	padding: 3.2rem 0;
	background-color: #76c7ad;
	font-weight: 700;
	text-align: center;
`;

function Stats() {
	return (
		<StyledStats>
			You have X items in your bag, and you already packed X (X%) items.
		</StyledStats>
	);
}

export default Stats;
