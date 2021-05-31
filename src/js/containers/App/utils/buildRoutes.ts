import { route } from "@acai/router";
import { Route } from "react-router-dom";
import React, { lazy } from 'react';

export default function buildRoutes () {
	const routes = route.build(false).map(route => {
		const _route = {...route} as typeof route & {wrap: string | undefined};
		_route.wrap = route.options.wrap ? `wrap/${route.options.wrap}`:undefined;

		return _route;
	}).map(route => {
		const wrap = route.options?.wrap as undefined | (() => JSX.Element);

		// build component to render with wrap
		let callback = wrap ?
			(p: any) => React.createElement(wrap, { children: React.createElement(lazy(() => import(`../../../views/${route.file}/index.tsx`)), p) }) :
			lazy(() => import(`../../../views/${route.file}/index.tsx`));

		return React.createElement(Route, {
			exact: true,
			key: route.file as string,
			path: route.path,
			component: callback,
		});
	});

	console.log(routes);

	return routes;
}
