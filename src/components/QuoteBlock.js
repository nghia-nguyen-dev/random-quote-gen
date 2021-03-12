export default ({text}) => {
	return (
		<li className="quote-block">
			<div className="quote-block__bar"></div>
			<h1 className="quote-block__text">{text}</h1>
		</li>
	);
};
