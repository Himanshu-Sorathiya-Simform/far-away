import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form.tsx";
import Logo from "./components/Logo.tsx";
import PackingList from "./components/PackingList.tsx";
import Stats from "./components/Stats.tsx";
import type { Item } from "./types/types.ts";

const StyledApp = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr auto;

	width: 100%;
	height: 100vh;
`;

function App() {
	const [items, setItems] = useState<Item[]>([]);

	function handleAddItems(item: Item) {
		setItems((items) => [...items, item]);
	}

	return (
		<StyledApp>
			<Logo />

			<Form onAddItems={handleAddItems} />

			<PackingList items={items} />

			<Stats />
		</StyledApp>
	);
}

export default App;
