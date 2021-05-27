// Packages
import React from "react";

// Component
import Props from "./props";
import style from "./style.module.scss";

const Input = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [value, setValue] = React.useState("");

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onChange = React.useCallback((target) => {
		if (props.onChange) props.onChange(target.target.value);
		setValue(target.target.value);
	}, []);

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const className = React.useMemo(() => {
		const response = [];

		// required classes
		response.push("input");
		response.push(style.input);

		// optional classes
		if (props.className) Array.isArray(props.className) ? props.className.forEach(i => response.push(i)) : response.push(props.className);

		return response.join(" ");
	}, [props.className]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className={style.container}>
			{
				props.label &&
				<label htmlFor={props.name}>{props.label}</label>
			}
			{
				props.icon &&
				<div className={style.icon}>
					<i className={`fa fa-${props.icon}`} />
				</div>
			}
			<input
				name={props.name}
				placeholder={props.placeholder}
				className={className}
				required={props.required}
				style={props.style}
				value={value}
				onChange={onChange}
				onFocus={() => props.onFocus && props.onFocus(true)}
				onBlur={() => props.onFocus && props.onFocus(false)}
			/>
			<div className={style.close}>
				<button onClick={() => onChange({target:{value: ""}})}>
					<i className={`fa fa-times`} />
				</button>
			</div>
		</div>
	);
}

export default Input;