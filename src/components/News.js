import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
	// articles = [
	// 	{
	// 		source: {
	// 			id: "bbc-sport",
	// 			name: "BBC Sport",
	// 		},
	// 		author: null,
	// 		title: "Son Heung-min and Thomas Muller score first Major League Soccer goals",
	// 		description:
	// 			"Former Tottenham captain Son Heung-min and ex-Bayern Munich forward Thomas Muller score their first Major League Soccer goals.",
	// 		url: "http://www.bbc.co.uk/sport/football/articles/cj0yg46zve8o",
	// 		urlToImage:
	// 			"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/16e7/live/1fe0d050-80ad-11f0-a3d9-1da4f6d816f2.jpg",
	// 		publishedAt: "2025-08-24T06:52:21.956047Z",
	// 		content:
	// 			"Former Tottenham captain Son Heung-min and ex-Bayern Munich forward Thomas Muller both registered their first Major League Soccer goals on Saturday.\r\nSouth Korea star Son, 33, scored a stunning free-… [+1024 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: "the-huffington-post",
	// 			name: "The Huffington Post",
	// 		},
	// 		author: "Kelby Vera",
	// 		title: "Trump Held On To Flashy Gold FIFA Trophy... Leaving Soccer Champs With A Replica",
	// 		description:
	// 			"The president recounted how the Club World Cup trophy ended up in the Oval Office during an interview at the tournament finals on Sunday.",
	// 		url: "https://www.huffpost.com/entry/trump-fifa-soccer-club-world-cup-trophy_n_68755c06e4b0b1c6f12569ae?origin=top-ad-recirc",
	// 		urlToImage:
	// 			"https://img.huffingtonpost.com/asset/6875675e160000e6b442cd77.jpeg?cache=5jqq3Pc2Ie&ops=1200_630",
	// 		publishedAt: "2025-07-14T23:33:51Z",
	// 		content:
	// 			"President Donald Trump scored quite the keepsake from his friends at FIFA.\r\nWhile talking to British sports streamer DAZN during soccers Club World Cup finals on Sunday, the president revealed that h… [+2618 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: "bbc-sport",
	// 			name: "BBC Sport",
	// 		},
	// 		author: null,
	// 		title: "Jack Grealish: England hopeful inspires Everton to winning start at new stadium",
	// 		description:
	// 			"Jack Grealish provides the inspiration and smiles as Everton make the perfect start at their magnificent new stadium, says chief football writer Phil McNulty.",
	// 		url: "http://www.bbc.co.uk/sport/football/articles/ckgj4x7z9j2o",
	// 		urlToImage:
	// 			"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/8e99/live/be2d92d0-8106-11f0-8c38-31822da937fe.jpg",
	// 		publishedAt: "2025-08-24T18:07:21.9579038Z",
	// 		content:
	// 			"With victory assured, Everton manager Moyes took the opportunity to let Grealish enjoy the acclaim of a standing ovation when he was replaced by youngster Harrison Armstrong four minutes into stoppag… [+2323 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: "the-washington-post",
	// 			name: "The Washington Post",
	// 		},
	// 		author: "Jesse Dougherty",
	// 		title: "He’s in an SEC QB battle. He also just signed with the Dodgers.",
	// 		description:
	// 			"Missouri’s Sam Horn wants to play both football and baseball as long as possible. The business of modern college sports is making that easier.",
	// 		url: "https://www.washingtonpost.com/sports/2025/08/24/sam-horn-missouri-dodgers/",
	// 		urlToImage:
	// 			"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R6UVIMPEUNGYLE43C2DUMYZYFA_size-normalized.jpg&w=1440",
	// 		publishedAt: "2025-08-24T12:00:16Z",
	// 		content:
	// 			"COLUMBIA, Mo. The Los Angeles Dodgers front office will closely watch the University of Missouri football team in the coming months.\r\nUm. Why, exactly?",
	// 	},
	// 	{
	// 		source: {
	// 			id: "talksport",
	// 			name: "TalkSport",
	// 		},
	// 		author: "161385360554578",
	// 		title: "Saka and Odegaard injured, Brentford shock Villa, Tottenham stun Man City",
	// 		description:
	// 			"talkSPORT.com has all the latest news, updates, views and reaction from around the footballing world. It’s Gameday Two of the Premier League, with Chelsea hammering West Ham 5-1 on Friday to …",
	// 		url: "https://talksport.com/football/3352286/premier-league-news-live-latest-updates-transfers-arsenal-man-united-chelsea-liverpool/",
	// 		urlToImage:
	// 			"https://talksport.com/wp-content/uploads/sites/5/2025/08/crop-3497482_634bef.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
	// 		publishedAt: "2025-08-24T09:58:50Z",
	// 		content:
	// 			"talkSPORT.com has all the latest news, updates, views and reaction from around the footballing world.\r\nIt's Gameday Two of the Premier League, with Chelsea hammering West Ham 5-1 on Friday to get the… [+14598 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: "bbc-sport",
	// 			name: "BBC Sport",
	// 		},
	// 		author: null,
	// 		title: "Wayne Rooney: Arsenal's Max Dowman is the name on everybody's lips",
	// 		description:
	// 			"Wayne Rooney says Max Dowman has got the whole football world talking as he offers the Arsenal teenager advice following his Premier League debut.",
	// 		url: "http://www.bbc.co.uk/sport/football/articles/cy8jwjwx4ddo",
	// 		urlToImage:
	// 			"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bc39/live/b6e43b80-8121-11f0-a01d-cd58e146b553.jpg",
	// 		publishedAt: "2025-08-25T05:37:25.9278594Z",
	// 		content:
	// 			"The challenge for Dowman is to remain grounded as his profile grows and the excitement over his potential builds.\r\n\"For Max and his family and friends, I'm sure they're all living in a dream and a fa… [+1976 chars]",
	// 	},
	// ];

	static defaultProps = {
		url: "https://newsapi.org/v2/top-headlines?",
		apiKey: "e2fe00876ebe42abaf9734faed2754cc",
		country: "us",
		pageSize: 6,
		category: "general",
	};

	static propTypes = {
		url: PropTypes.string,
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
		apiKey: PropTypes.string,
	};

	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
		document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
			this.props.category
		)}`;
	}

	async updateNews() {
		let url =
			this.props.url +
			`category=${this.props.category}` +
			`&country=${this.props.country}` +
			`&apiKey=${this.props.apiKey}` +
			`&page=${this.state.page}` +
			`&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	async componentDidMount() {
		this.updateNews();
	}

	handleNextClick = async () => {
		this.setState({ page: this.state.page + 1 });
		this.updateNews();
	};

	handlePrevClick = async () => {
		this.setState({ page: this.state.page - 1 });
		this.updateNews();
	};

	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 });
		let url =
			this.props.url +
			`category=${this.props.category}` +
			`&country=${this.props.country}` +
			`&apiKey=${this.props.apiKey}` +
			`&page=${this.state.page}` +
			`&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
		});
	};

	render() {
		let { url, pageSize } = this.props;
		return (
			<>
				<h1
					className="text-center"
					style={{ margin: "30px 0px" }}>
					NewsMonkey - Top Headlines
				</h1>
                { this.state.loading && <Spinner /> }
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={
						this.state.articles.length < this.state.totalResults
					}
					loader={<Spinner />}
                    style={{ overflow: 'hidden' }}>
					<div className="container">
						<div className="row">
								{this.state.articles.map((element, index) => {
									return (
										<div
											className="col-md-4"
											key={index}
                                            >
											<NewsItem
												title={
													element.title
														? element.title.slice(
																0,
																50
														  )
														: ""
												}
												description={
													element.description
														? element.description.slice(
																0,
																75
														  )
														: ""
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

				{/* <div className="d-flex justify-content-between">
					<button
						type="button"
						className="btn btn-dark mx-2"
						onClick={this.handlePrevClick}
						disabled={this.state.page <= 1}>
						&larr; Previous
					</button>
					<button
						type="button"
						className="btn btn-dark mx-2"
						onClick={this.handleNextClick}
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / pageSize)
						}>
						Next &rarr;
					</button>
				</div> */}
			</>
		);
	}
}

export default News;
