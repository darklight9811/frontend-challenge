// Packages
import { CSSProperties } from "react";

export default interface PropsInterface {
	name?: string;

	label?: string;
	required?: boolean;
	className?: string | string[];
	placeholder?: string;
	icon?: string;
	style?: CSSProperties;

	// callbacks
	onChange?: (value: string) => string | undefined;
	onFocus?: (isFocused: boolean) => void;
}