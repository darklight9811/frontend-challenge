// Packages
import React from "react";
import { Link } from "react-router-dom";

// Image
import wavyImage from "../../../img/wave.svg";
import triangleImage from "../../../img/triangle.svg";
import rectangleImage from "../../../img/rectangle.svg";
import circleImage from "../../../img/circle.svg";

// Containers
import useLocalization from "../../../containers/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

// Utils
import getColor from "./utils/getColor";
import stringToHash from "../../../utils/functions/hash";

const Card = (props: Props) => {

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
		return [0, 1, 2, 3].map(() => {
			const hash = stringToHash(props.book.id);
	
			return {
				top: `${((Math.random() * 10000000000) / hash) * 6}%`,
				left: `${((Math.random() * 10000000000) / hash) * 6}%`,
				transform: `rotate(${Math.random()}deg)`
			}
		});
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link to={`books/${props.book.id}`} className={style.container} style={{backgroundColor: colors[0]}}>
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

			<img className={style.decoration} src={wavyImage} style={position[0]} />
			<img className={style.decoration} src={triangleImage} style={position[1]} />
			<img className={style.decoration} src={rectangleImage} style={position[2]} />
			<img className={style.decoration} src={circleImage} style={position[3]} />
		</Link>
	);
}

export default Card;