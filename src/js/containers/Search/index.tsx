// Packages
import React from "react";
import BookCard from "../../components/cards/BookCard";
import InfiniteScroll from "react-infinite-scroll-component";

// Models
import bookService from "../../models/books";

// Component
import Props from "./props";
import style from "./style.module.scss";

const Search = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [search, setSearch] = React.useState<string>();

	// refs
	const timeout = React.useRef<NodeJS.Timeout>();

	// services
	const [{list, loading}] = bookService.useModel();

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		if (timeout.current) clearTimeout(timeout.current);

		timeout.current = setTimeout(() => {
			if (props.search) bookService.index(props.search);
			else bookService.clear();
			setSearch(props.search);
		}, 500);
	}, [props.search]);

	React.useEffect(() => {
		document.querySelector("#search")?.addEventListener("scroll", () => {

		});
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className={`${style.container}${props.search || search ? ` ${style.display}`:""}`}>
			<InfiniteScroll
				next={() => bookService.loadPage()}
				hasMore={list.data.length !== 0 && list.data.length % 12 === 0}
				loader={<div className={style.spin}><i className="fa fa-spinner spin" /></div>}
				dataLength={list.data.length}
			>
				<div className="container" id="search">
						<div className="row">
							{list.data.map((i, index) => <BookCard key={i.id + i.etag + index} book={i} />)}
						</div>
				</div>
			</InfiniteScroll>
		</div>
	);
}

export default Search;