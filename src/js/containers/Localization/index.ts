// Packages
import React from "react";

// Parts
import Component 	from "./component";
import context 		from "./context";

const useLocalization 		= (category?: string) => {
	const _ 				= React.useContext(context);
	const [keys, setkeys] 	= React.useState({});

	React.useEffect(() => {
		_(category).then(setkeys);
	}, [_, category]);

	return (key: string, defaultValue?: string) => (keys || {})[key as keyof typeof keys] || defaultValue;
};

useLocalization.Provider 	= Component;

export default useLocalization;