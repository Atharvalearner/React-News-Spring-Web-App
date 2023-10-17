import React from 'react'

const Newsitems = (props) => {
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <span className="position-absolute my-2 top-0 translate-middle badge bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
                <img src={!imageurl ? "https://cleantechnica.com/files/2021/06/US-Capitol-Congress-wendy-maxwell-Pexels-free-to-use-CC0-e1624720723348.jpeg" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">by {!author ? 'Unknown' : author} On {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} className="btn btn-sn btn-primary btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitems
