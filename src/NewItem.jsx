import React from 'react';

class NewItem extends React.Component {

  constructor(props) {
    super(props);
  }
handleChange(event){
this.props.onChange(event.target.value)
}

// value={this.props.value}

  render() {

    return (

      <div className="card-body" >
        <h5 className="card-title">I want to...</h5>
        <div className="form-group shadow-textarea">
          <textarea className="form-control z-depth-1" className="create-todo-text" id="exampleFormControlTextarea6" rows="3"
          placeholder="Write something here..."  onChange={this.handleChange.bind(this)} ></textarea>
        </div>

        <h5>How much of a priority is this?</h5>
        <select className="browser-default custom-select custom-select-lg mb-3">

          <option defaultValue>Select a priority</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
        <a href="#" className="btn btn-primary btn-block" cursor='pointer' onClick ={this.props.onClick}>Add</a>
      </div>




    );
  };
};

export default NewItem
