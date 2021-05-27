export default interface PropsInterface {
	name?: string;

	label?: string;
	required?: boolean;
	className?: string | string[];
	placeholder?: string;
	icon?: string;

	// callbacks
	onChange?: (value: string) => string | undefined;
	onFocus?: () => void;
}