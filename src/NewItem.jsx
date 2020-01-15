import React from 'react';

class NewItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="card-body" >
        <h5 className="card-title">I want to...</h5>
        <div className="form-group shadow-textarea">
          <textarea name='description' className="form-control z-depth-1 create-todo-next" id="exampleFormControlTextarea6" rows="3"
          placeholder="Write something here..." value={this.props.description} onChange={this.props.handleChange} />
        </div>

        <h5>How much of a priority is this?</h5>
        <select name='priority' value={this.props.priority} onChange={this.props.handleChange} className="browser-default custom-select custom-select-lg mb-3">
        <option defaultValue>Select one below</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
        <button className= "btn btn-primary btn-block" cursor='pointer' onClick ={this.props.addToDo}>Add</button>
      </div>




    );
  };
};

export default NewItem
