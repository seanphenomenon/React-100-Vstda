import React from 'react';

class EditToDo extends React.Component{

  constructor(props){
    super(props);

  }



  render(){

  return (
        <div>
      <form>
        <div className="form-group">
        <label for="formGroupExampleInput">Description</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
    </div>
        <div className="form-group">
      <label for="formGroupExampleInput2">Priority</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
    </div>
        <button type="button" className='btn-success update-todo' onClick={this.handleSaveEdit}>Save</button>
      </form>
      </div>
    );
  }
}

export default EditToDo;
