// Packages
import React from "react";

// Component
import Props from "./props";
import style from "./style.module.scss";

const Search = (props: Props) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className={`${style.container}${props.search ? ` ${style.display}`:""}`}>
			hi
		</div>
	);
}

export default Search;