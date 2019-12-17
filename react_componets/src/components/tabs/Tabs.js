import React, { Component } from 'react';
import Tab from './Tab';
import Grid from '../grid/Grid';
import MessageDisplay from '../review/MessageDisplay';
import CreateReview from '../review/CreateReview';
import './Tabs.css';

/**
 * @class Tab
 * @description A sample React JS ProductGrid Component
 */
export default class Tabs extends Component {
  state = {
    active: 1,
    tabs: [
      { id: 0, label: 'Grid Component', component: <Grid /> },
      { id: 1, label: 'Review Component', component: <><MessageDisplay /><CreateReview /></> }
    ]
  };

  /**
   * @function onTabClick
   * @description Handles the click event for the tabs to switch display
   * @param {Object} e - The event object reference
   */
  onTabClick = (e) => {
    this.setState({
      active: parseInt(e.currentTarget.getAttribute('data-id'), 10)
    })
  }

  /**
   * @function render
   * @description Render the ProductGrid component
   */
  render() {
    return (
      <div className="tabs-container">
        <ul className="tab-header">
          {
            this.state.tabs.map((item, i) => {
              return <Tab
                      key={i}
                      label={item.label}
                      id={item.id}
                      active={(i === this.state.active) ? 'active' : '' }
                      onClick={this.onTabClick}/>
            })
          }
        </ul>
        <div className="component-display">
        {
          this.state.tabs[this.state.active].component
        }
        </div>
      </div>
    );
  }
}
