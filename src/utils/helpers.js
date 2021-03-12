export const buildQueryStr = ([first, last]) => {
	return `https://quote-garden.herokuapp.com/api/v3/quotes?author=${first}+${last}`;
};

export const fetchData = (setter, url) => {
	return fetch(url)
		.then((res) => res.json())
		.then(({ data }) => setter(data));
};
