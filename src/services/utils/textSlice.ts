export const trimLink = (link: string): string => {
	const leftPart = link?.slice(0, 6);
	const rightPart = link?.slice(-4);

	return `${leftPart}...${rightPart}`;
};

export function shortNotation(string: string, fromStart: number, fromEnd = 0): string {
	if (string.length <= fromStart + fromEnd) {
		return string;
	}
	const leftPart = string.slice(0, fromStart);
	const rightPart = fromEnd ? string.slice(-fromEnd) : '';

	return `${leftPart}...${rightPart}`;
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeAll(string: string) {
	return string.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
}
