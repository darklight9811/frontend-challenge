// Packages
import React from 'react';
import { Switch } from "react-router-dom";

// Component
import buildRoutes from './utils/buildRoutes';

function App() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<React.Suspense fallback="">
			<Switch children={buildRoutes()} />
		</React.Suspense>
	);
}

export default App;
