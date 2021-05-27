// Packages
import React from "react";

// Parts
import context 	from "./context";
import Props 	from "./props";

const Localization = ({ children, language }: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// state
	const [currentlang, setlanguage] = React.useState(language || navigator.language);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		setlanguage(language || navigator.language);
	}, [language]);

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const translate = React.useCallback(
		(category?: string) => {
			const name = (`${category}` || "index");
			return import(`../../../localization/${currentlang}/${name}.json`)
				.then(response => {
					return response.default;
				})
				.catch(error => {
					console.warn(error);
				});
		},
		[currentlang]
	);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<context.Provider value={translate} children={children} />
	);
};

export default Localization;
