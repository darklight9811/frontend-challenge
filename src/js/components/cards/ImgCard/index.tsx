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
import spacedImgs from "../../../utils/functions/spacedImgs";

const ImgCard = (props: Props) => {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general");

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const position = React.useMemo(() => {
		return spacedImgs([
			wavyImage, triangleImage, rectangleImage, circleImage
		], 1);
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link to={props.to} target="_BLANK" className={style.container} style={{backgroundImage: `url(${props.img})`}}>
			{position}
		</Link>
	);
}

export default ImgCard;