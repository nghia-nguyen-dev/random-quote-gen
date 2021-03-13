import { useState, useEffect } from "react";
import QuoteBlock from "components/QuoteBlock";
import { fetchData, buildQueryStr } from "utils/helpers";
import * as R from "ramda";

export default ({ mainQuote }) => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		if (!R.isEmpty(mainQuote)) {
			const url = R.pipe(
				R.prop("quoteAuthor"),
				R.split(" "),
				buildQueryStr
			)(mainQuote);
			fetchData(setQuotes, url);
		}
	}, [mainQuote]);

	const quoteList = quotes.map(({ quoteText, _id }) => {
		return <QuoteBlock text={quoteText} key={_id} />;
	});

	return (
		<div className="quotes">
			<h2 className="quotes__author">{mainQuote.quoteAuthor}</h2>
			<ul className="quotes__list">{quoteList}</ul>
		</div>
	);
};
