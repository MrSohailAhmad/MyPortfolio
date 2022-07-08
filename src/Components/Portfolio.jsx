import React from "react";
import portfolio from "./Portfolio_items";
function Portfolio() {
  return (
    <div className="port-sec">
      <div className="port-heading">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio_container">
        {portfolio.map(({ id, IMG, title, git, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={IMG} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={git} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
