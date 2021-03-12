export default (setter, url) => {
	return fetch(url)
		.then((res) => res.json())
		.then(({ data }) => setter(data));
}