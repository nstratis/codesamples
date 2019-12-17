import React, { Component } from 'react';
import GridHeader from './GridHeader';
import GridRow from './GridRow';
import GridFilter from './GridFilter';
import './Grid.css';

/**
 * @class ProductGrid
 * @description A sample React JS ProductGrid Component
 */
export default class ProductGrid extends Component {
  state = {
    filter: 'all',
    filters: [],
    data: []
  };

  /**
   * @function formatData
   * @description This will extract unique filters from the supplied
   * data so that the filter SELECT can be populated and store the data
   * for use
   * @param {Object} data - The response data from the server
   */
  formatData(data) {
    // Map the filters for each item to a single array
    const mapped = data.items.map((item) => item.class),
    // Flatten the grouped array into a single array
    reduced = mapped.reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue));
    // Remove any duplicates
    const filters = ['all'].concat([...new Set(reduced)]);
    this.setState({
      filters: filters,
      data: data.items
    });
  }

  /**
   * @function componentDidMount
   * @description When the component mounts, load the data from the server
   */
  componentDidMount() {
    fetch('./data/bikes.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.formatData(data);
    });
  }

	/**
	 * @function onChange
	 * @description Handle the change event for the filter
	 * @param {object} e - The event object
	 */
  onChange = (e) => {
    const value = e.target.options[e.target.selectedIndex].value;
    this.setState({ filter: value });
  }

  /**
	 * @function filterData
	 * @description Filters the data based on the current selected filter
	 */
  filterData() {
    // Filter the data list by the current code
    return this.state.data.filter((item) => {
      return (
        (item.class.indexOf(this.state.filter) > -1)
        || this.state.filter === 'all'
      );
    }).map((value, i) => {
      return (
        <GridRow
          key={i}
          img={value.image.thumb}
          name={value.name}
          description={value.description}
          classes={value.class.join(',')}
        />
      );
    });
  }

  /**
   * @function render
   * @memberof ProductGrid
   * @description Render the ProductGrid component
   */
  render() {
    const gridItems = this.filterData();
    return (
      <div>
        <GridFilter
          label="Filter Table:"
          data={this.state.filters}
          onChange={this.onChange}
        />
        <table className="products">
          <GridHeader />
          <tbody>
            {gridItems}
          </tbody>
        </table>
      </div>
    );
  }
}
