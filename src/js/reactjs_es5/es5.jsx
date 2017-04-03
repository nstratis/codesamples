(function(){
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

    /**
     * @function getInitialState
     * @memberof ComList
     * @description Returns the initial state of the react class showing 3 items
     */
    getInitialState(){ return { list:4 }; },

    /**
     * @function onChange
     * @memberof ComList
     * @description Handle the change event for the select item
     * @param {Object} e - The event object
     */
    onChange:function(e){
      // Get the selected value
      var val = parseInt(e.target.options[e.target.selectedIndex].value, 10);
      // Set the new state for the class, increment by once since
      // the start index is 1 and not 0
      this.setState({ list:val+1 });
    },

    /**
     * @function componentDidMount
     * @memberof ComList
     * @description Handle the component mount to force setting the selected index
     * @param {Object} e - The event object
     */
    componentDidMount:function(){
      // Set the selected index of the item
      this.refs.selem.selectedIndex = (this.state.list - 2);
    },

    /**
     * @function render
     * @memberof ComList
     * @description Render the output of the componet
     */
    render:function(){
      var self = this;
      return(
        <div id="select-list">
          <h3>ComList</h3>
          <label>Make a selection:</label><select ref="selem" onChange={(e) => this.onChange(e)}>
            {
            	_.map(_.range(1, 6), (i) => <option key={i}> {i} </option>)
            }
          </select>
          {
          	_.map(_.range(1, this.state.list), (i) => <div key={i}> {i} </div>)
          }
        </div>
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

    /**
     * @function getInitialState
     * @memberof Checkboxes
     * @description Returns the initial state of the react class showing 3 items
     */
    getInitialState(){
      return {
        a:'none',
        b:'none'
      };
    },

    /**
     * @function onChange
     * @memberof Checkboxes
     * @description Handle the change event for the check box
     * @param {Object} e - The event object
     */
    onChange:function(e){
      // Get the parent of the checkbox element
      var parent = e.target.parentNode,
      // Retrieve the id of the parent
      id = parent.id;
      // Determine if the item is checked
      if(e.target.checked){
        // Set the state for the related checkbox
        if(id === 'id-a'){ this.setState({a:'bold'}); }
        if(id === 'id-b'){ this.setState({b:'bold'}); }
        return true;
      }
      if(id === 'id-a'){ this.setState({a:'none'}); }
      if(id === 'id-b'){ this.setState({b:'none'}); }
    },

    /**
     * @function render
     * @memberof Checkboxes
     * @description Render the output of the componet
     */
    render:function(){
      // Define the class name for the a and b checbox coms
      var aClass = 'findMe',
      bClass = 'findMe';
      // Set the selector based on the element states
      if(this.state.a !== 'none'){ aClass += ' bold'; }
      if(this.state.b !== 'none'){ bClass += ' bold'; }
      return(
        <div id="checkbox-group">
            <h3>Checkbox Group</h3>
            <div id="id-a" className={aClass}>
              <input type="checkbox" onChange={this.onChange} /><label>Find me</label>
            </div>
            <div id="id-b" className={bClass}>
              <input type="checkbox" onChange={this.onChange} /><label>Find me</label>
            </div>
        </div>
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

    /**
     * @function getInitialState
     * @memberof SortableList
     * @description Returns the initial state of the react class with
     * the empty values
     */
    getInitialState(){
      return {
        data:[],
        list:[],
        company:'',
      };
    },

    /**
     * @function componentWillMount
     * @memberof SortableList
     * @description Retrieves the data from the server before the component mounts
     */
    componentWillMount:function(){
      // Declare the self reference for scope preservation
      var self = this;
      // Execute the request for the data
      aim.ajax.send({
        type:'GET',
        //url:'https://private-ed589c-javascripttest.apiary-mock.com/films',
        url:'../data/films.json',
        // Success handler for the ajax request
        success:function(data){
          // Parse the JSON data into an object
          var json = JSON.parse(data), def = ['Select to Filter'],
          // Get the company list
          comps = aim.util.cleanDuplicates(json, 'company').map((value, i) => {
            return value.company;
          });
          def = def.concat(comps);
          // name, company, url, image
          self.setState({ data:json, list:def});
        },
        error:function(e){
          console.log('ERROR: ', e);
        }
      })
    },

    /**
     * @function onChange
     * @memberof SortableList
     * @description Handle the change event for the select
     * @param {Object} e - The event object
     */
    onChange:function(e){
      // Get the selected value
      var val = e.target.options[e.target.selectedIndex].value;
      // Ultimately I would have normally set a value of -1 for the default
      // but this is only an example
      if(val === 'Select to Filter'){  val = ''; }
      // Set the new company state
      this.setState({ company:val });
    },

    /**
     * @function render
     * @memberof SortableList
     * @description Render the output of the componet
     */
    render:function(){
      var self = this;
      // Filter the data list by the current company state
      const list = this.state.data.filter(function(obj) {
        return (obj.company === self.state.company || self.state.company === '');
      }).map((value, i) => {
          return (
            <li key={i}>
              <img src={'../' + value.image} />
              <div className="company">{value.company}</div>
              <div className="name">{value.name}</div>
              <a href={value.url}>Link</a>
            </li>
          );
      });
      // Map the Select options to the select element
      const cOpts = this.state.list.map((value, i) => {
        return (
          <option key={i}>{value}</option>
        );
      });

  		return (
    	  <div id="sortable-list">
          <h3>Sortable List</h3>
          <select ref="selem" onChange={(e) => this.onChange(e)}>
            {cOpts}
          </select>
          <ul>
            {list}
          </ul>
        </div>
      )
  	}
  })

  /**
   * @function render
   * @description Render the ReactJS components to the dom container
   */
  ReactDOM.render(
    <div>
      <ComList/>
      <Checkboxes/>
      <SortableList/>
    </div>,
    document.getElementById('container')
  );
}());
