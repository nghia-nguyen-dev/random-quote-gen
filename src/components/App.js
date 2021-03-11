import { useState, useEffect } from "react";
import RefreshIcon from "assets/icons/refresh-icon.svg";
import * as R from "ramda";
import QuoteBlock from "components/QuoteBlock";

const getRandomQuote = (setter) => {
	return fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
		.then((res) => res.json())
		.then(({ data }) => {
			setter(data[0]);
			return data[0].quoteAuthor;
		});
};

const getQuotesByAuthor = (setter, name) => {
	const [firstName, lastName] = name.split(" ");
	fetch(
		`https://quote-garden.herokuapp.com/api/v3/quotes?author=${firstName}+${lastName}`
	)
		.then((res) => res.json())
		.then((data) => setter(data));
};

export default () => {
	const [mainQuote, setMainQuote] = useState({});
	const [quoteList, setQuoteList] = useState([]);

	useEffect(() => {
		console.log(`useEffect`);
		getRandomQuote(setMainQuote)
            .then((author) => getQuotesByAuthor(setQuoteList, author));
	}, []);

	return (
		<div className="app">
			<div className="randomizer">
				<p>Random</p>
				<img src={RefreshIcon} />
			</div>
			<QuoteBlock text={mainQuote.quoteText} />
			<div className="author">
				<h2>{mainQuote.quoteAuthor}</h2>
				<p>{mainQuote.quoteGenre}</p>
			</div>
		</div>
	);
};
