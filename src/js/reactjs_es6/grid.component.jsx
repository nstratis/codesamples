/*global aim, ReactDOM */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function(){

/**
 * @class BikeGrid
 * @description A sample React JS BikeGrid Component
 */
class BikeGrid extends React.Component {

  /**
   * @function constructor
   * @memberof BikeGrid
   * @description The constructor function for the BikeGrid component
   */
  constructor(props){
    // All constructors require the super() to be executed
    super(props);
    // Set the state for the board
    this.state = {
      filter:'all'
    };
    // Bind the current scope to the method, standard ES6 requirement
    this.onChange = this.onChange.bind(this);
  }

  /**
   * @function componentWillReceiveProps
   * @memberof BikeGrid
   * @description The lifecyle method to determine if props are received
   */
  //componentWillReceiveProps(nextProps){
    //console.log('componentWillReceiveProps()');
  //}

  /**
   * @function shouldComponentUpdate
   * @memberof BikeGrid
   * @description The lifecyle shouldComponentUpdate method executed after the render
   */
  //shouldComponentUpdate(){
    //console.log('shouldComponentUpdate()');
    // Return a boolean true
    //return true;
  //}

  /**
   * @function componentWillUpdate
   * @memberof BikeGrid
   * @description The lifecyle method straight after the shouldComponentUpdate
   */
  //componentWillUpdate(nextProps, nextState){
    // Return a boolean true
    //console.log('componentWillUpdate()', nextProps, nextState);
  //}

  /**
   * @function componentDidUpdate
   * @memberof BikeGrid
   * @description The lifecyle didMount method executed after the render
   */
  //componentDidUpdate(prevProps, prevState){
    //console.log('componentDidUpdate()', prevProps, prevState);
  //}

  /**
   * @function componentWillMount
   * @memberof BikeGrid
   * @description The lifecyle componentWillMount method executed before mounting
   */
  //componentWillMount(){
    //console.log('componentWillMount()');
  //}

  /**
   * @function componentDidMount
   * @memberof BikeGrid
   * @description The lifecyle didMount method executed after the render
   */
  //componentDidMount(){
    //console.log('componentDidMount()');
  //}

  /**
   * @function componentWillUnmount
   * @memberof BikeGrid
   * @description The lifecyle will unmount method
   */
  //componentWillUnmount(){
    //console.log('componentWillUnmount()');
  //}

  /**
   * @function destroy
   * @memberof BikeGrid
   * @description Destroy the component
   */
  destroy(){
    // Unmount the component from the dom
    return ReactDOM.unmountComponentAtNode(document.getElementById(this.props.parent));
  }

	/**
	 * @public
	 * @function onChange
	 * @memberof BikeGrid
	 * @description Handle the change event for the filter
	 * @param {object} e - The event object
	 */
  onChange(e){
    // Get the selected value
    var val = e.target.options[e.target.selectedIndex].value;
    this.setState({ filter:val });
  }

  /**
   * @function render
   * @memberof BikeGrid
   * @description Render the BikeGrid component
   */
  render(){
    console.log(this.state.filter);
    // Declare the self reference for scope preservations
    let self = this;
    let def = ['all'];
    def = def.concat(this.props.classArray);
    //Map the Select options to the select element
    let cOpts = def.map((value, i) => {
      return (
        <option key={i}>{value}</option>
      );
    });
    // Filter the data list by the current code
    const list = this.props.data.filter(function(item) {
      console.log(item.class);
      return ((item.class.indexOf(self.state.filter) > -1) || self.state.filter === 'all');
    }).map((value, i) => {
        return (
          <tr key={i}>
            <td>
              <img src={'../' + value.image.thumb} width="100" height="100" alt="This is one of our bikes" />
            </td>
            <td className="code">
            {value.name}
            </td>
            <td>
              {value.description}
            </td>
            <td>
              {value.class.join(',')}
            </td>
          </tr>
        );
    });

    return(
      <div>
        <nav className="sorter">
          <label>Filter By:</label><select  onChange={(e) => this.onChange(e)}>{cOpts}</select>
        </nav>
        <table className="products">
          <thead>
            <tr>
              <th> </th>
              <th className="code">Name</th>
              <th>Description</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

/**
 * @function propTypes
 * @memberof BikeGrid
 * @description Strong type the property expectations
 */
BikeGrid.propTypes = {
  data:React.PropTypes.array,
  classArray:React.PropTypes.array
};

/**
 * @function defaultProps
 * @memberof BikeGrid
 * @description Set the default props for the component in the event they
 * were not define in the creation
 */
// BikeGrid.defaultProps = {
//
// }

/**
 * @namespace app
 * @function bikegrid
 * @description The aim.BikeGrid reference object for creating new instances
 */
app.bikegrid = (function(){
  return {
    create:function(parent, options){
      // // Get the parent element from the dom
      let pNode = document.getElementById(parent);
      // // Add the default class name to the parent
      let grid = <BikeGrid data={options.data} classArray={options.classArray} parent={parent} />;
      // Render the menu in the dom
      grid = ReactDOM.render(grid, pNode);
      // // Return the BikeGrid object for referencing
      return grid;
    }
  }
}());

}());
