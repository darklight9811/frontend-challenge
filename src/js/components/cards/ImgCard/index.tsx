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
import stringToHash from "../../../utils/functions/hash";

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
		return [0, 1, 2, 3].map(() => {
			const hash = stringToHash(props.to);
			const randomx = (((Math.random() * 10000000000) / hash) * 10).toString().substr(0, 2);
			const randomy = (((Math.random() * 10000000000) / hash) * 10).toString().substr(0, 2);
	
			return {
				top: `${randomx}%`,
				left: `${randomy}%`,
				transform: `rotate(${Math.random() * 360}deg)`
			}
		});
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Link to={props.to} className={style.container} style={{backgroundImage: `url(${props.img})`}}>
			<img className={style.decoration} src={wavyImage} style={position[0]} />
			<img className={style.decoration} src={triangleImage} style={position[1]} />
			<img className={style.decoration} src={rectangleImage} style={position[2]} />
			<img className={style.decoration} src={circleImage} style={position[3]} />
		</Link>
	);
}

export default ImgCard;