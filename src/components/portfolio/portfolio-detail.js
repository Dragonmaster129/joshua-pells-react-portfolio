import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
    };

    this.getPortfolioItem = this.getPortfolioItem.bind(this);
  }

  getPortfolioItem() {
    axios
      .get(
        `http://joshuapells.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) =>
        this.setState({
          portfolioItem: response.data.portfolio_item,
        })
      )
      .catch((error) =>
        console.log("error in getPortfolioItem in portfolio-detail.js", error)
      );
  }

  componentDidMount() {
    this.getPortfolioItem();
  }

  render() {
    const {
      name,
      description,
      url,
      category,
      thumb_image_url,
      banner_image_url,
      logo_url,
    } = this.state.portfolioItem;
    return (
      <div className="portfolio-detail-wrapper">
        <img className="banner-image" src={banner_image_url} />
        <h2>{name}</h2>
        <img className="logo-image" src={logo_url} />
        <p>{description}</p>
        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}
