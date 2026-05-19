import styled from "styled-components";
import type { Item } from "../types/types.ts";

interface StatsProps {
	items: Item[];
}

const StyledStats = styled.footer`
	padding: 3.2rem 0;
	background-color: var(--color-stats);
	font-weight: 700;
	text-align: center;
`;

function Stats({ items }: StatsProps) {
	const numItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	const percentage = ((packedItems / numItems) * 100).toFixed(2);

	return (
		<StyledStats>
			<em>
				{percentage === "0.00" || percentage === "NaN" ?
					"Start adding items to your list."
				: percentage === "100.00" ?
					"You got everything ready! Time to go."
				:	`You have ${numItems} items in your bag, and you already packed
					${packedItems} (${percentage}%) items.`
				}
			</em>
		</StyledStats>
	);
}

export default Stats;
