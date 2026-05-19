import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form.tsx";
import Logo from "./components/Logo.tsx";
import PackingList from "./components/PackingList.tsx";
import Stats from "./components/Stats.tsx";
import { initialItems } from "./data/data.ts";
import type { Item } from "./types/types.ts";

const StyledApp = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr auto;

	width: 100%;
	height: 100vh;
`;

function App() {
	const [items, setItems] = useState<Item[]>(initialItems);

	function handleAddItems(item: Item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id: number) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleClearList() {
		setItems([])
	}

	function handleTogglePackedItem(id: number) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		);
	}

	return (
		<StyledApp>
			<Logo />

			<Form onAddItem={handleAddItems} />

			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onTogglePackedItem={handleTogglePackedItem}
				onClearList={handleClearList}
			/>

			<Stats items={items} />
		</StyledApp>
	);
}

export default App;
