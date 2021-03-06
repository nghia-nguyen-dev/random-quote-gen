import { useState, useEffect } from "react";
import QuoteBlock from "components/QuoteBlock";
import Quotes from "components/Quotes";
import { fetchData } from "utils/helpers";
import Info from "components/Info";
import Randomizer from "components/Randomizer";
import config from "utils/config";

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
						<Info mainQuote={mainQuote} setState={setState} />
					</>
				);

			case 2:
				return <Quotes mainQuote={mainQuote[0]} />;
		}
	};

	return (
		<div className="app">
			<Randomizer setMainQuote={setMainQuote} />
			{renderView()}
		</div>
	);
};
