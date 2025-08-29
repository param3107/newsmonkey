import React, { Component } from "react";

function timeAgo(dateString) {
    const now = Date.now();
    const past = new Date(dateString).getTime();
    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (hours < 48) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
}

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } =
            this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                {timeAgo(date)} | By {author ? author : "anon"}
                            </small>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <a
                                rel="noreferrer"
                                href={newsUrl}
                                target="_blank"
                                className="btn btn-sm btn-dark"
                            >
                                Read More
                            </a>
                            <span
                                className="badge text-bg-danger text-wrap ms-2"
                                style={{
                                    maxWidth: "210px",
                                    textAlign: "right",
                                }}
                            >
                                {source}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
