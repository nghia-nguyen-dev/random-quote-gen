import * as R from "ramda";
import { useState, useEffect } from "react";
import refreshIcon from "assets/icons/refresh-icon.svg";
import QuoteBlock from "components/QuoteBlock";
import QuoteList from "components/QuoteList";
import { fetchData } from "utils/helpers";
import rightArrow from "assets/icons/right-arrow.svg";

const config = {
	URL: `https://quote-garden.herokuapp.com/api/v3/quotes/random`,
};

export default () => {
	const [mainQuote, setMainQuote] = useState([{}]);
	const [state, setState] = useState(1);

	useEffect(() => {
		fetchData(setMainQuote, config.URL);
	}, []);

	const renderView = () => {
		switch (state) {
			case 1:
				return (
					<>
						<QuoteBlock text={mainQuote[0].quoteText} />

						<div className="info" onClick={() => setState(2)}>
							<div className="info__content">
								<h2>{mainQuote[0].quoteAuthor}</h2>
								<p>{mainQuote[0].quoteGenre}</p>
							</div>
							<img className="info__icon" src={rightArrow} />
						</div>
					</>
				);
			case 2:
				return <QuoteList mainQuote={mainQuote[0]} />;
		}
	};

	return (
		<div className="app">
			<div
				className="randomizer"
				onClick={() => fetchData(setMainQuote, config.URL)}
			>
				<p className="randomizer__text">Random</p>
				<img className="randomizer__icon" src={refreshIcon} />
			</div>

			{renderView()}
		</div>
	);
};
