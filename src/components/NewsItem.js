import React from "react";
import defaultImage from "../assets/default.webp";

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

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div className="style" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
                    <span className="badge text-bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl || defaultImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
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
                        {/* <span
                            className="badge text-bg-danger text-wrap ms-2"
                            style={{
                                maxWidth: "210px",
                                textAlign: "right",
                            }}
                        >
                            {source}
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
