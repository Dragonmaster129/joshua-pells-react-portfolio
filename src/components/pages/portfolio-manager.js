import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PorfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };

    this.handleSuccessfulFormSubmission =
      this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    // TODO
    // update the portfolioItems state
    // and add the portfolioItem to the list
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }

  handleFormSubmissionError(error) {
    console.log("An error occurred in handleFormSubmissionError", error);
  }

  getPortfolioItems() {
    axios
      .get(
        "https://joshuapells.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc"
      )
      .then((response) => {
        this.setState({ portfolioItems: [...response.data.portfolio_items] });
      })
      .catch((error) => {
        console.log("An error occurred: ", error);
      });
  }

  portfolioItems() {
    return <PortfolioSidebarList data={this.state.portfolioItems} />;
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PorfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>
        <div className="right-column">{this.portfolioItems()}</div>
      </div>
    );
  }
}
