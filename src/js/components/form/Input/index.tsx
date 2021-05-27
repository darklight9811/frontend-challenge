// Packages
import React from "react";

// Component
import Props from "./props";
import style from "./style.module.scss";

const Input = (props: Props) => {
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
			<input name={props.name} placeholder={props.placeholder} className={className} required={props.required} />
		</div>
	);
}

export default Input;