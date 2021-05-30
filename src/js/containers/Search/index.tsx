// Packages
import React from "react";
import BookCard from "../../components/cards/BookCard";

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

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className={`${style.container}${props.search || search ? ` ${style.display}`:""}`}>
			<div className="container">
				<div className="row">
					{list.data.map(i => <BookCard key={i.id} book={i} />)}
				</div>
				{
					loading &&
					
					<div className={style.spin}><i className="fa fa-spinner spin" /></div>
				}
			</div>
		</div>
	);
}

export default Search;