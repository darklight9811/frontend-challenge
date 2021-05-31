// Packages
import React from "react";
import Carousel from "nuka-carousel";

// Containers
import useLocalization from "../../containers/Localization";

// Components
import ViewCard from "../../components/cards/ViewCard";
import ReadCard from "../../components/cards/ReadCard";

// Models
import configService from "../../models/config";
import bookService from "../../models/books";
import ImgCard from "../../components/cards/ImgCard";

const List = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// models
	const [{user}] = configService.useModel();

	// hooks
	const _ = useLocalization("home");

	// -------------------------------------------------
	// Render 
	// -------------------------------------------------

	return (
		<>
			<div className="container">
				<h1 className="mb-4">{_("HI")}, <span className="color-primary">{user.name}</span> 👋</h1>

				<h2 className="mb-3">{_("DISCOVER")} <button className="link">{_("MORE")}</button></h2>
			</div>

			<Carousel withoutControls slideWidth="282px" style={{ margin: "20px" }}>
				{bookService.getRecommended().map(i => <ViewCard key={i.id} book={i} />)}
			</Carousel>

			<div className="container">
				<h2 className="mt-4 mb-3">{_("READING")} <button className="link">{_("ALL")}</button></h2>
			</div>

			<div className="my-4 py-3">
				<ReadCard userId={user.id} book={bookService.getRecommended()[0]} />
			</div>

			<div className="container">
				<h2 className="mt-4 mb-3">{_("REVIEWS")} <button className="link">{_("ALL")}</button></h2>
			</div>

			<Carousel withoutControls style={{ margin: "20px" }}>
				{bookService.getPosts().map(i => <ImgCard key={i.to} to={i.to} img={i.img} />)}
			</Carousel>
		</>
	);
}

export default List;