import React from 'react';

class EditToDo extends React.Component{

  constructor(props){
    super(props);

  }

  render(){

   return(
        <div>
      <form>
        <div className="alert alert-dark">
        <label for="formGroupExampleInput">Description</label>
        <textarea type="text" name="updatedDescription" className="form-control" id="formGroupExampleInput" defaultValue={this.props.description} value={this.props.editedDescription}></textarea>
        <div className = "Row">
      <label for="formGroupExampleInput2">Priority</label>
      <select type="text" name="updatedPriority" className="browser-default custom-select custom-select-lg mb-3" id="formGroupExampleInput2" defaultValue={this.props.priority} value={this.props.editedPriority}>
       <option defaultValue>Select one below</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>

    </div>
        <button type="button" className='btn-success update-todo' name='description' onClick={()=> this.props.handleSaveEdit(this.props.editedDescription)}>Save</button>
    </div>
    </form>
  </div>

  );

// editing gis looking back at array similar to deleteing function..instead its not deleteing anything its editing it. delete buton istied to list item, and list item is connected to parent.
  }
}


export default EditToDo;
