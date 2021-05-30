// Packages
import React from "react";
import { Link } from "react-router-dom";

// Image
import wavyImage from "../../../../img/wave.svg";
import triangleImage from "../../../../img/triangle.svg";
import rectangleImage from "../../../../img/rectangle.svg";
import circleImage from "../../../../img/emptycircle.svg";

// Containers
import useLocalization from "../../../containers/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

// Utils
import getColor from "./utils/getColor";
import spacedImgs from "../../../utils/functions/spacedImgs";

const ViewCard = (props: Props) => {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general");

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const colors = React.useMemo(() => {
		return getColor(props.book.id);
	}, [props.book.id]);

	const position = React.useMemo(() => {
		return spacedImgs([
			wavyImage, triangleImage, rectangleImage, circleImage
		], 1);
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link to={`/books/${props.book.id}`} className={`col ${style.container}`} style={{backgroundColor: colors[0]}}>
			<div className="col-8">
				<h1 style={{color: colors[1]}}>{props.book.volumeInfo.title}</h1>
				<h2 style={{color: colors[1]}}>{props.book.volumeInfo.authors[0]}</h2>

				<h3 style={{color: colors[1]}}>
					<i className="fa fa-chart-bar"  style={{color: colors[1]}} /> {props.book.volumeInfo.pageCount}+ {_("READ")}
				</h3>
			</div>
			{
				(props.book.volumeInfo.imageLinks?.thumbnail || props.book.volumeInfo.imageLinks?.smallThumbnail) &&

				<div className="col-4">
					<img className={style.cover} src={props.book.volumeInfo.imageLinks?.thumbnail || props.book.volumeInfo.imageLinks?.smallThumbnail} />
				</div>
			}

			{position}
		</Link>
	);
}

export default ViewCard;