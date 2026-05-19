import type { Item } from "../types/types.ts";

const initialItems: Item[] = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Something", quantity: 2, packed: true },
	{ id: 4, description: "Something More", quantity: 1, packed: false },
];

export { initialItems };
