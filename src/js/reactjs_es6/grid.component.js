'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global aim, ReactDOM */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function () {

  /**
   * @class BikeGrid
   * @description A sample React JS BikeGrid Component
   */
  var BikeGrid = function (_React$Component) {
    _inherits(BikeGrid, _React$Component);

    /**
     * @function constructor
     * @memberof BikeGrid
     * @description The constructor function for the BikeGrid component
     */
    function BikeGrid(props) {
      _classCallCheck(this, BikeGrid);

      // Set the state for the board
      var _this = _possibleConstructorReturn(this, (BikeGrid.__proto__ || Object.getPrototypeOf(BikeGrid)).call(this, props));
      // All constructors require the super() to be executed


      _this.state = {
        filter: 'all'
      };
      // Bind the current scope to the method, standard ES6 requirement
      _this.onChange = _this.onChange.bind(_this);
      return _this;
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


    _createClass(BikeGrid, [{
      key: 'destroy',
      value: function destroy() {
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

    }, {
      key: 'onChange',
      value: function onChange(e) {
        // Get the selected value
        var val = e.target.options[e.target.selectedIndex].value;
        this.setState({ filter: val });
      }

      /**
       * @function render
       * @memberof BikeGrid
       * @description Render the BikeGrid component
       */

    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        console.log(this.state.filter);
        // Declare the self reference for scope preservations
        var self = this;
        var def = ['all'];
        def = def.concat(this.props.classArray);
        //Map the Select options to the select element
        var cOpts = def.map(function (value, i) {
          return React.createElement(
            'option',
            { key: i },
            value
          );
        });
        // Filter the data list by the current code
        var list = this.props.data.filter(function (item) {
          console.log(item.class);
          return item.class.indexOf(self.state.filter) > -1 || self.state.filter === 'all';
        }).map(function (value, i) {
          return React.createElement(
            'tr',
            { key: i },
            React.createElement(
              'td',
              null,
              React.createElement('img', { src: '../' + value.image.thumb, width: '100', height: '100', alt: 'This is one of our bikes' })
            ),
            React.createElement(
              'td',
              { className: 'code' },
              value.name
            ),
            React.createElement(
              'td',
              null,
              value.description
            ),
            React.createElement(
              'td',
              null,
              value.class.join(',')
            )
          );
        });

        return React.createElement(
          'div',
          null,
          React.createElement(
            'nav',
            { className: 'sorter' },
            React.createElement(
              'label',
              null,
              'Filter By:'
            ),
            React.createElement(
              'select',
              { onChange: function onChange(e) {
                  return _this2.onChange(e);
                } },
              cOpts
            )
          ),
          React.createElement(
            'table',
            { className: 'products' },
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  ' '
                ),
                React.createElement(
                  'th',
                  { className: 'code' },
                  'Name'
                ),
                React.createElement(
                  'th',
                  null,
                  'Description'
                ),
                React.createElement(
                  'th',
                  null,
                  'Class'
                )
              )
            ),
            React.createElement(
              'tbody',
              null,
              list
            )
          )
        );
      }
    }]);

    return BikeGrid;
  }(React.Component);

  /**
   * @function propTypes
   * @memberof BikeGrid
   * @description Strong type the property expectations
   */


  BikeGrid.propTypes = {
    data: React.PropTypes.array,
    classArray: React.PropTypes.array
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
  app.bikegrid = function () {
    return {
      create: function create(parent, options) {
        // // Get the parent element from the dom
        var pNode = document.getElementById(parent);
        // // Add the default class name to the parent
        var grid = React.createElement(BikeGrid, { data: options.data, classArray: options.classArray, parent: parent });
        // Render the menu in the dom
        grid = ReactDOM.render(grid, pNode);
        // // Return the BikeGrid object for referencing
        return grid;
      }
    };
  }();
})();