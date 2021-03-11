export default ({quoteList}) => {
    const quotes = quoteList.map(({quoteText}) => {
        console.log(quoteText)
    })

    return (
        <div>Quote List</div>
    )
}