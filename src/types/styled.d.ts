import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		logo: string;
		form: string;
		list: string;
		stats: string;
		accent: string;
	}
}
