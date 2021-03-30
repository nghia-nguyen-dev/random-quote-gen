import refreshIcon from "assets/icons/refresh-icon.svg";
import config from "utils/config";
import { fetchData } from "utils/helpers";

export default ({ setMainQuote }) => {
	return (
		<div
			className="randomizer"
			onClick={() => fetchData(setMainQuote, config.URL)}
		>
			<p className="randomizer__text">random</p>
			<img className="randomizer__icon" src={refreshIcon} />
		</div>
	);
};
