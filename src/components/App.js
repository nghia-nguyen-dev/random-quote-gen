import * as R from "ramda";
import { useState, useEffect } from "react";
import RefreshIcon from "assets/icons/refresh-icon.svg";
import QuoteBlock from "components/QuoteBlock";
import QuoteList from "components/QuoteList";
import { fetchData } from "utils/helpers";

export default () => {
	const [mainQuote, setMainQuote] = useState([{}]);

	useEffect(() => {
		fetchData(
			setMainQuote,
			`https://quote-garden.herokuapp.com/api/v3/quotes/random`
		);
	}, []);

	return (
		<div className="app">
			<div className="randomizer">
				<p>Random</p>
				<img src={RefreshIcon} />
			</div>
			<QuoteBlock text={mainQuote[0].quoteText} />
			<div className="author">
				<h2>{mainQuote[0].quoteAuthor}</h2>
				<p>{mainQuote[0].quoteGenre}</p>
			</div>
			<QuoteList mainQuote={mainQuote[0]} />
		</div>
	);
};
