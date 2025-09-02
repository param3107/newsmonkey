import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
	url = "https://newsapi.org/v2/top-headlines?",
	apiKey = process.env.REACT_APP_NEWS_API_KEY,
	country = "us",
	pageSize = 6,
	category = "general",
	setProgress = () => {},
}) => {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const [error, setError] = useState(null);
	

	const updateNews = async () => {
		try {
			setProgress(10);
			let newUrl =
				url +
				`category=${category}` +
				(country ? `&country=${country}` : "") +
				`&apiKey=${apiKey}` +
				`&page=${page}` +
				`&pageSize=${pageSize}`;

			setLoading(true);
			let data = await fetch(newUrl);
			if (!data.ok) {
				// Handle 429 or any other status
				throw new Error(`HTTP error! status: ${data.status}`);
			}
			let parsedData = await data.json();

			setArticles(
				Array.isArray(parsedData.articles) ? parsedData.articles : []
			);
			setTotalResults(parsedData.totalResults || 0);
			setLoading(false);
			setProgress(100);
		} catch (error) {
			console.error("Error fetching news:", error);
			setArticles([]);
			setTotalResults(0);
			setLoading(false);
			setError("Failed to load news. Please try again later.");
			setProgress(100);
		}
	};

	const fetchMoreData = async () => {
		try {
			const nextPage = page + 1;
			let newUrl =
				url +
				`category=${category}` +
				(country ? `&country=${country}` : "") +
				`&apiKey=${apiKey}` +
				`&page=${nextPage}` +
				`&pageSize=${pageSize}`;

			let data = await fetch(newUrl);
			if (!data.ok) {
				throw new Error(`HTTP error! status: ${data.status}`);
			}
			let parsedData = await data.json();

			const newArticles = Array.isArray(parsedData.articles)
				? parsedData.articles
				: [];

			// if no more articles, stop infinite scroll
			if (newArticles.length === 0) {
				setTotalResults(articles.length);
				return;
			}

			setArticles((prevArticles) => prevArticles.concat(newArticles));
			setTotalResults(
				Math.min(parsedData.totalResults || totalResults, 100)
			);
			setPage(nextPage);
		} catch (error) {
			console.error("Error fetching more news:", error);
		}
	};

	useEffect(() => {
		document.title = `NewsMonkey - ${capitalizeFirstLetter(category)}`;
		updateNews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1
				className="text-center"
				style={{ margin: "30px 0px", marginTop: "100px" }}>
				NewsMonkey - Top Headlines
			</h1>
			{loading && <Spinner />}
			{error && (
				<div className="alert alert-danger text-center"> {error}</div>
			)}

			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length < totalResults}
				loader={<Spinner />}
				style={{ overflow: "hidden" }}>
				<div className="container">
					<div className="row">
						{articles.map((element, index) => {
							return (
								<div
									className="col-md-4"
									key={index}>
									<NewsItem
										title={
											element.title
												? element.title
												: "Title..."
										}
										description={
											element.description
												? element.description
												: "Description..."
										}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
										author={element.author}
										date={element.publishedAt}
										source={element.source.name}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
		</>
	);
};

News.propTypes = {
	url: PropTypes.string,
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
	apiKey: PropTypes.string,
};

export default News;
