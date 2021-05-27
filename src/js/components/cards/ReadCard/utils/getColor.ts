import stringToHash from "../../../../utils/functions/hash";

const colorMaps = [
	["#451475", "white"],
	["#EEF5DB", "var(--color-text)"],
	["#00173D", "white"],
];

export default function getColor (id: string) {
	return colorMaps[stringToHash(id) & (colorMaps.length - 1)];
}