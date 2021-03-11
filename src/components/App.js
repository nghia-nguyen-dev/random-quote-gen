import RefreshIcon from 'assets/icons/refresh-icon.svg'

export default () => { 
	return (
		<div className="app">
			<div className="randomizer">
				<p>Random</p>
				<img src={RefreshIcon}/>
			</div>
			<div className="quote">
				<div></div>
				<h1>Some kind of random quote text</h1>
			</div>
			<div className="author">
				<h2>Author's name</h2>
				<p>quote genre</p>
			</div>
		</div>
	);
};
