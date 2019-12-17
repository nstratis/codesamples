import React, { Component } from 'react';
import ListItem from './list-item/ListItem';
import './SelectSortable.css';

/**
 * @class SelectSortable
 * @description A Sortable select input item
 */
export default class SelectSortable extends Component {
  state = {
    data: [],
    list: [],
    company: ''
  };

  /**
   * @function componentDidMount
   * @description When the component mounts, load the data from the server
   */
  componentDidMount() {
    fetch('./data/films.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const companies = data.map((item) => {
        return item.company;
      });
      const list = ['all'].concat([...new Set(companies)]);
      this.setState({ list, data: data });
    });
  }

	/**
	 * @function onChange
	 * @description Handle the change event for the filter
	 * @param {object} e - The event object
	 */
  onChange = (e) => {
   let value = e.target.options[e.target.selectedIndex].value;
   if (value === 'all') {
     value = '';
   }
   this.setState({ company: value });
  }

  /**
   * @function render
   * @description Render the ProductGrid component
   */
  render() {
    console.log(this.state.data.filter);
    return (
      <div id="sortable-list">
        <label>By Company: </label><select className="company-selector" onChange={this.onChange}>
          {this.state.list.map((value, i) => {
            return (
              <option key={i}>{value}</option>
            );
          })}
        </select>
        <ul className="display-list">
          {
            (this.state.data.filter)
            ? this.state.data.filter((obj) => {
                return (
                  obj.company === this.state.company
                  || this.state.company === ''
                );
              }).map((value, i) => {
                return (<ListItem
                  key={i}
                  name={value.name}
                  image={value.image}
                  company={value.company}
                  url={value.url}
                  />
                );
              })
            : null
          }
        </ul>
      </div>
    );
  }
}
