// Packages
import React from "react";
import { Link } from "react-router-dom";

// Image
import wavyImage from "../../../../img/wave.svg";
import triangleImage from "../../../../img/triangle.svg";
import rectangleImage from "../../../../img/rectangle.svg";
import circleImage from "../../../../img/circle.svg";

// Containers
import useLocalization from "../../../containers/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

// Utils
import getColor from "./utils/getColor";
import stringToHash from "../../../utils/functions/hash";
import bookService from "../../../models/books";

const ReadCard = (props: Props) => {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general");

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const data = React.useMemo(() => {
		return bookService.getReadInformation(props.book.id, props.userId);
	}, [props.book, props.userId]);

	const colors = React.useMemo(() => {
		return getColor(props.book.id);
	}, [props.book.id]);

	const position = React.useMemo(() => {
		return [0, 1, 2, 3].map(() => {
			const hash = stringToHash(props.book.id);
	
			return {
				top: `${((Math.random() * 10000000000) / hash) * 6}%`,
				left: `${((Math.random() * 10000000000) / hash) * 6}%`,
				transform: `rotate(${Math.random() * 360}deg)`
			}
		});
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link to={`books/${props.book.id}`} className={style.container} style={{backgroundColor: colors[0]}}>
			{
				(props.book.volumeInfo.imageLinks?.thumbnail || props.book.volumeInfo.imageLinks?.smallThumbnail) &&

				<div className="col-4">
					<img className={style.cover} src={props.book.volumeInfo.imageLinks?.thumbnail || props.book.volumeInfo.imageLinks?.smallThumbnail} />
				</div>
			}
			<div className="col-8 ps-2">
				<h1 style={{color: colors[1]}}>{props.book.volumeInfo.title}</h1>
				<h2 style={{color: colors[1]}}>{props.book.volumeInfo.authors[0]}</h2>

				<h3 style={{color: colors[1]}} className={style.read}>
					<i style={{color: colors[1]}} className="fa fa-book" /> {_("CHAPTER")} {data.currentChapter} {_("FROM")} {data.totalChapters}
				</h3>
			</div>

			<img className={style.decoration} src={wavyImage} style={position[0]} />
			<img className={style.decoration} src={triangleImage} style={position[1]} />
			<img className={style.decoration} src={rectangleImage} style={position[2]} />
			<img className={style.decoration} src={circleImage} style={position[3]} />
		</Link>
	);
}

export default ReadCard;