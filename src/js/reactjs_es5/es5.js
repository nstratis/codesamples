"use strict";

(function () {
  'use strict';

  /*
    ----------------------------------------------------------------
    Simple Component manipulation with SELECT
    ----------------------------------------------------------------
  */

  /**
   * @class ComList
   * @description The ComList class object
   */

  var ComList = React.createClass({
    displayName: "ComList",


    /**
     * @function getInitialState
     * @memberof ComList
     * @description Returns the initial state of the react class showing 3 items
     */
    getInitialState: function getInitialState() {
      return { list: 4 };
    },


    /**
     * @function onChange
     * @memberof ComList
     * @description Handle the change event for the select item
     * @param {Object} e - The event object
     */
    onChange: function onChange(e) {
      // Get the selected value
      var val = parseInt(e.target.options[e.target.selectedIndex].value, 10);
      // Set the new state for the class, increment by once since
      // the start index is 1 and not 0
      this.setState({ list: val + 1 });
    },

    /**
     * @function componentDidMount
     * @memberof ComList
     * @description Handle the component mount to force setting the selected index
     * @param {Object} e - The event object
     */
    componentDidMount: function componentDidMount() {
      // Set the selected index of the item
      this.refs.selem.selectedIndex = this.state.list - 2;
    },

    /**
     * @function render
     * @memberof ComList
     * @description Render the output of the componet
     */
    render: function render() {
      var _this = this;

      var self = this;
      return React.createElement(
        "div",
        { id: "select-list" },
        React.createElement(
          "h3",
          null,
          "ComList"
        ),
        React.createElement(
          "label",
          null,
          "Make a selection:"
        ),
        React.createElement(
          "select",
          { ref: "selem", onChange: function onChange(e) {
              return _this.onChange(e);
            } },
          _.map(_.range(1, 6), function (i) {
            return React.createElement(
              "option",
              { key: i },
              " ",
              i,
              " "
            );
          })
        ),
        _.map(_.range(1, this.state.list), function (i) {
          return React.createElement(
            "div",
            { key: i },
            " ",
            i,
            " "
          );
        })
      );
    }
  });

  /*
  ----------------------------------------------------------------
   CHECKBOXES
   Interactive checkbox display
   ----------------------------------------------------------------
  */

  /**
   * @class Checkboxes
   * @description The Checkboxes class object
   */
  var Checkboxes = React.createClass({
    displayName: "Checkboxes",


    /**
     * @function getInitialState
     * @memberof Checkboxes
     * @description Returns the initial state of the react class showing 3 items
     */
    getInitialState: function getInitialState() {
      return {
        a: 'none',
        b: 'none'
      };
    },


    /**
     * @function onChange
     * @memberof Checkboxes
     * @description Handle the change event for the check box
     * @param {Object} e - The event object
     */
    onChange: function onChange(e) {
      // Get the parent of the checkbox element
      var parent = e.target.parentNode,

      // Retrieve the id of the parent
      id = parent.id;
      // Determine if the item is checked
      if (e.target.checked) {
        // Set the state for the related checkbox
        if (id === 'id-a') {
          this.setState({ a: 'bold' });
        }
        if (id === 'id-b') {
          this.setState({ b: 'bold' });
        }
        return true;
      }
      if (id === 'id-a') {
        this.setState({ a: 'none' });
      }
      if (id === 'id-b') {
        this.setState({ b: 'none' });
      }
    },

    /**
     * @function render
     * @memberof Checkboxes
     * @description Render the output of the componet
     */
    render: function render() {
      // Define the class name for the a and b checbox coms
      var aClass = 'findMe',
          bClass = 'findMe';
      // Set the selector based on the element states
      if (this.state.a !== 'none') {
        aClass += ' bold';
      }
      if (this.state.b !== 'none') {
        bClass += ' bold';
      }
      return React.createElement(
        "div",
        { id: "checkbox-group" },
        React.createElement(
          "h3",
          null,
          "Checkbox Group"
        ),
        React.createElement(
          "div",
          { id: "id-a", className: aClass },
          React.createElement("input", { type: "checkbox", onChange: this.onChange }),
          React.createElement(
            "label",
            null,
            "Find me"
          )
        ),
        React.createElement(
          "div",
          { id: "id-b", className: bClass },
          React.createElement("input", { type: "checkbox", onChange: this.onChange }),
          React.createElement(
            "label",
            null,
            "Find me"
          )
        )
      );
    }
  });

  /*
  ----------------------------------------------------------------
  SORTABLE LIST
  This is a sortable list display  component
  ----------------------------------------------------------------
  */
  /**
   * @class SortableList
   * @description The SortableList class object
   */
  var SortableList = React.createClass({
    displayName: "SortableList",


    /**
     * @function getInitialState
     * @memberof SortableList
     * @description Returns the initial state of the react class with
     * the empty values
     */
    getInitialState: function getInitialState() {
      return {
        data: [],
        list: [],
        company: ''
      };
    },


    /**
     * @function componentWillMount
     * @memberof SortableList
     * @description Retrieves the data from the server before the component mounts
     */
    componentWillMount: function componentWillMount() {
      // Declare the self reference for scope preservation
      var self = this;
      // Execute the request for the data
      aim.ajax.send({
        type: 'GET',
        //url:'https://private-ed589c-javascripttest.apiary-mock.com/films',
        url: '../data/films.json',
        // Success handler for the ajax request
        success: function success(data) {
          // Parse the JSON data into an object
          var json = JSON.parse(data),
              def = ['Select to Filter'],

          // Get the company list
          comps = aim.util.cleanDuplicates(json, 'company').map(function (value, i) {
            return value.company;
          });
          def = def.concat(comps);
          // name, company, url, image
          self.setState({ data: json, list: def });
        },
        error: function error(e) {
          console.log('ERROR: ', e);
        }
      });
    },

    /**
     * @function onChange
     * @memberof SortableList
     * @description Handle the change event for the select
     * @param {Object} e - The event object
     */
    onChange: function onChange(e) {
      // Get the selected value
      var val = e.target.options[e.target.selectedIndex].value;
      // Ultimately I would have normally set a value of -1 for the default
      // but this is only an example
      if (val === 'Select to Filter') {
        val = '';
      }
      // Set the new company state
      this.setState({ company: val });
    },

    /**
     * @function render
     * @memberof SortableList
     * @description Render the output of the componet
     */
    render: function render() {
      var _this2 = this;

      var self = this;
      // Filter the data list by the current company state
      var list = this.state.data.filter(function (obj) {
        return obj.company === self.state.company || self.state.company === '';
      }).map(function (value, i) {
        return React.createElement(
          "li",
          { key: i },
          React.createElement("img", { src: '../' + value.image }),
          React.createElement(
            "div",
            { className: "company" },
            value.company
          ),
          React.createElement(
            "div",
            { className: "name" },
            value.name
          ),
          React.createElement(
            "a",
            { href: value.url },
            "Link"
          )
        );
      });
      // Map the Select options to the select element
      var cOpts = this.state.list.map(function (value, i) {
        return React.createElement(
          "option",
          { key: i },
          value
        );
      });

      return React.createElement(
        "div",
        { id: "sortable-list" },
        React.createElement(
          "h3",
          null,
          "Sortable List"
        ),
        React.createElement(
          "select",
          { ref: "selem", onChange: function onChange(e) {
              return _this2.onChange(e);
            } },
          cOpts
        ),
        React.createElement(
          "ul",
          null,
          list
        )
      );
    }
  });

  /**
   * @function render
   * @description Render the ReactJS components to the dom container
   */
  ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(ComList, null),
    React.createElement(Checkboxes, null),
    React.createElement(SortableList, null)
  ), document.getElementById('container'));
})();