import { useState, useEffect } from "react";
import QuoteBlock from "components/QuoteBlock";
import fetchData from "utils/fetchData";
import * as R from "ramda";

const buildQueryString = (name) => {
	return `https://quote-garden.herokuapp.com/api/v3/quotes?author=${name[0]}+${name[1]}`;
};

export default ({ mainQuote }) => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		if (!R.isEmpty(mainQuote)) {
			const url = R.pipe(
				R.prop("quoteAuthor"),
				R.split(" "),
				buildQueryString
			)(mainQuote);
			fetchData(setQuotes, url);
		}
	}, [mainQuote]);

	const quoteList = quotes.map(({ quoteText, _id }) => {
		return <QuoteBlock text={quoteText} key={_id}/>;
	});

	return <ul className="quote-list">{quoteList}</ul>;
};
