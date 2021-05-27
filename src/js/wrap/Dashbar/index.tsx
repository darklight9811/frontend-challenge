// Packages
import React from "react";
import { NavLink } from "react-router-dom";

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

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<div className="col">
				<div className="px-3 pb-4 pt-5">
					<Input style={{ zIndex: 105 }} onChange={value => void setSearch(value)} placeholder={_("SEARCH")} icon="search" />

				</div>
				<Search search={search} />

				{props.children}
			</div>

			<nav className={style.navbar}>
				<NavLink activeClassName={style.active} to="/"><i className="fa fa-home" />{_("HOME")}</NavLink>
				<NavLink activeClassName={style.active} to="/libraries"><i className="fa fa-book" />{_("LIBRARIES")}</NavLink>
				<NavLink activeClassName={style.active} to="/profile"><i className="fa fa-user" />{_("PROFILE")}</NavLink>
			</nav>
		</>
	);
}

export default Dashbar;