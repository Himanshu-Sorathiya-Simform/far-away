import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
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
	const [theme, setTheme] = useState("theme1");
	const [items, setItems] = useState<Item[]>(initialItems);

	const themeObj = {
		logo: `var(--color-${theme}-logo)`,
		form: `var(--color-${theme}-form)`,
		list: `var(--color-${theme}-list)`,
		stats: `var(--color-${theme}-stats)`,
		accent: `var(--color-${theme}-accent)`,
	};

	function handleAddItems(item: Item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id: number) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleClearList() {
		setItems([]);
	}

	function handleTogglePackedItem(id: number) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		);
	}

	function handleChangeTheme() {
		setTheme((currTheme) => (currTheme === "theme1" ? "theme2" : "theme1"));
	}

	return (
		<ThemeProvider theme={themeObj}>
			<StyledApp>
				<Logo />

				<Form
					onAddItem={handleAddItems}
					onChangeTheme={handleChangeTheme}
				/>

				<PackingList
					items={items}
					onDeleteItem={handleDeleteItem}
					onTogglePackedItem={handleTogglePackedItem}
					onClearList={handleClearList}
				/>

				<Stats items={items} />
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
