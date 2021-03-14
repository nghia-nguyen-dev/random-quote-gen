import { useState, useEffect } from "react";
import refreshIcon from "assets/icons/refresh-icon.svg";
import QuoteBlock from "components/QuoteBlock";
import Quotes from "components/Quotes";
import { fetchData } from "utils/helpers";

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
							<svg
								className="info__arrow"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								fill="#333"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
							</svg>
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
