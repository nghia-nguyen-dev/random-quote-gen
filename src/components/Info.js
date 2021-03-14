export default ({ setState, mainQuote }) => {
	return (
		<div className="info" onClick={() => setState(2)}>
			<div className="info__content">
				<p className="info__genre">{mainQuote[0].quoteGenre}</p>
				<h2 className="info__author">{mainQuote[0].quoteAuthor}</h2>
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
	);
};
