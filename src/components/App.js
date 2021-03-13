import * as R from "ramda";
import { useState, useEffect } from "react";
import refreshIcon from "assets/icons/refresh-icon.svg";
import QuoteBlock from "components/QuoteBlock";
import Quotes from "components/Quotes";
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
								<p className="info__genre">
									{mainQuote[0].quoteGenre}
								</p>
								<h2 className="info__author">
									{mainQuote[0].quoteAuthor}
								</h2>
							</div>
							<img className="info__icon" src={rightArrow} />
						</div>
					</>
				);

			case 2:
				return <Quotes mainQuote={mainQuote[0]} />;
		}
	};

	return (
		<div className="app">
			<div
				className="randomizer"
				onClick={() => fetchData(setMainQuote, config.URL)}
			>
				<p className="randomizer__text">random</p>
				<img className="randomizer__icon" src={refreshIcon} />
			</div>

			{renderView()}
		</div>
	);
};
