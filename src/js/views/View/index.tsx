// Packages
import React from "react";
import { useParams } from "react-router";
import parser from "html-react-parser";

// Image
import wavyImage from "../../../img/wave.svg";
import emptycircleImage from "../../../img/emptycircle.svg";
import circleImage from "../../../img/circle.svg";
import circleAltImage from "../../../img/circlealt.svg";

// Models
import bookService from "../../models/books";

// Component
import style from "./style.module.scss";

// Containers
import useLocalization from "../../containers/Localization";
import spacedImgs from "../../utils/functions/spacedImgs";

const View = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------
	
	// hooks
	const { id } = useParams<{id: string}>();
	const _ = useLocalization("view");

	// models
	const [{data, loading}] = bookService.useModel();

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const render = React.useMemo(() => {		
		if (loading || !data) {
			return (
				<div className={style.header}>
					<div>
						{spacedImgs([
							wavyImage, emptycircleImage, circleImage, circleAltImage, emptycircleImage, circleAltImage
						], 1)}
					</div>
	
					<header>
						<div className={style.spinner}><i className="fa fa-spinner spin" /></div>
					</header>
				</div>
			);
		}

		return (
			<>
				<div className={style.header}>
					<div>
						{spacedImgs([
							wavyImage, emptycircleImage, circleImage, circleAltImage, circleImage, emptycircleImage, circleAltImage, circleImage
						], 1)}
					</div>

					<img className={style.banner} src={data.volumeInfo.imageLinks.thumbnail || data.volumeInfo.imageLinks.smallThumbnail} />
				</div>

				<div className="container">
					<h1><span className="fw-bold">{data.volumeInfo.title}</span>{data.volumeInfo.subtitle ? <>: <span>{data.volumeInfo.subtitle}</span></>:""}</h1>

					<h2 className="color-primary">
						{!data.volumeInfo.authors && _("NO_AUTHORS")}
						{data.volumeInfo.authors && data.volumeInfo.authors.join(", ")}
					</h2>

					<div style={{ opacity: 0.6 }} className="pb-5 mb-4">
						{!data.volumeInfo.description && _("NO_DESCRIPTION")}
						{data.volumeInfo.description && parser(data.volumeInfo.description)}
					</div>
				</div>
			</>
		);
	}, [data]);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		bookService.show(id);
	}, [id]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div>
			{render}

			<div className={style.nav}>
				<div>
					<button><i className="fa fa-book-open" /> {_("READ")}</button>
					<button><i className="fa fa-headphones" /> {_("LISTEN")}</button>
					<button><i className="fa fa-share" /> {_("SHARE")}</button>
				</div>
			</div>
		</div>
	);
}

export default View;