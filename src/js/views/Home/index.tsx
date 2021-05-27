// Packages
import React from "react";
import Carousel from "nuka-carousel";

// Containers
import useLocalization from "../../containers/Localization";

// Components
import Card from "../../components/cards/ViewCard";

// Models
import authService from "../../models/auth";
import bookService from "../../models/books";

const List = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// models
	const [{user}] = authService.useModel();

	// hooks
	const _ = useLocalization("home");

	// -------------------------------------------------
	// Render 
	// -------------------------------------------------

	return (
		<div className="container">
			<h1 className="mb-4">{_("HI")}, <span className="color-primary">{user}</span> 👋</h1>

			<h2 className="mb-3">{_("DISCOVER")} <a className="link" href="#">{_("MORE")}</a></h2>

			<Carousel withoutControls slideWidth="282px">
				{bookService.getRecommended().map(i => <Card key={i.id} book={i} />)}
			</Carousel>

			<h2 className="mt-4 mb-3">{_("READING")} <a className="link" href="#">{_("ALL")}</a></h2>

			<Carousel withoutControls slideWidth="282px">
				{bookService.getRecommended().map(i => <Card key={i.id} book={i} />)}
			</Carousel>

			<h2 className="mt-4 mb-3">{_("REVIEWS")} <a className="link" href="#">{_("ALL")}</a></h2>
		</div>
	);
}

export default List;