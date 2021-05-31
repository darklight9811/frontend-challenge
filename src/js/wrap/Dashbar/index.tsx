// Packages
import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

// Containers
import useLocalization from "../../containers/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

// Components
import Input from "../../components/form/Input";
import Search from "../../containers/Search";

const Dashbar = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [ search, setSearch ] = React.useState<string>();

	// hooks
	const _ = useLocalization("general");
	const location = useLocation();
	const history = useHistory();

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const shouldRenderAlternate = React.useCallback((main: JSX.Element, alternate?: JSX.Element) => {
		if (location.pathname.split("/").length < 3) {
			return main;
		}

		return alternate || null;
	}, [location]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<div className="col">
				<div className="px-3 pb-4 pt-5">
					{shouldRenderAlternate(
						<>
							<Input style={{ zIndex: 105 }} onChange={value => void setSearch(value)} placeholder={_("SEARCH")} icon="search" />
							<Search search={search} />
						</>,
						<>
							<button className={style.back} onClick={() => history.goBack()}><i className="fa fa-arrow-left" /></button>
						</>
					)}
				</div>

				<div className="pb-5">
					{props.children}
				</div>
			</div>
			{shouldRenderAlternate(
				<nav className={style.navbar}>
					<NavLink activeClassName={style.active} to="/"><i className="fa fa-home" />{_("HOME")}</NavLink>
					<NavLink activeClassName={style.active} to="/"><i className="fa fa-book" />{_("LIBRARIES")}</NavLink>
					<NavLink activeClassName={style.active} to="/"><i className="fa fa-user" />{_("PROFILE")}</NavLink>
				</nav>
			)}
		</>
	);
}

export default Dashbar;