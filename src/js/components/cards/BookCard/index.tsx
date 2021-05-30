// Packages
import React from "react";
import { Link } from "react-router-dom";

// Containers
import useLocalization from "../../../containers/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

const BookCard = (props: Props) => {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link onClick={props.onClick} to={`/books/${props.book.id}`} className={`col-4 ${style.container}`}>
			<img className={style.cover} src={props.book.volumeInfo.imageLinks?.thumbnail || props.book.volumeInfo.imageLinks?.smallThumbnail} />

			<h1>{props.book.volumeInfo.title}</h1>
			{
				props.book.volumeInfo.authors &&
				<h2>{_("BY")} {props.book.volumeInfo.authors[0]}</h2>
			}
		</Link>
	);
}

export default BookCard;