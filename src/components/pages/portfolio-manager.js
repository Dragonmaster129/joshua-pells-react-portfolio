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
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter((item) => {
            return item.id !== portfolioItem.id;
          }),
        });
        return response.data;
      })
      .catch((error) => {
        "Error occured in handleDeleteClick:", error;
      });
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
        <div className="right-column">
          <PortfolioSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
          />
        </div>
      </div>
    );
  }
}
