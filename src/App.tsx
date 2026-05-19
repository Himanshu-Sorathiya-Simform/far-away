import styled from "styled-components";
import Form from "./components/Form.tsx";
import Logo from "./components/Logo.tsx";
import PackingList from "./components/PackingList.tsx";
import Stats from "./components/Stats.tsx";

const StyledApp = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr auto;

	width: 100%;
	height: 100vh;
`;

function App() {
	return (
		<StyledApp>
			<Logo></Logo>

			<Form></Form>

			<PackingList></PackingList>

			<Stats></Stats>
		</StyledApp>
	);
}

export default App;
