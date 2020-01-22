import React from 'react';

class EditToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: '',
      isEditing: false

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });

  }

  handleSave(event) {

    event.preventDefault();

    console.log(event);

    this.props.handleSave(this.props.description, this.state.description, this.state.priority);
  }

  render() {

    return (
      <div>
        <form>
          <div className="alert alert-dark">
            <label htmlFor="description">Description: {this.props.description}</label>
            <textarea type="text" name="description" className="form-control update-todo-text" id="formGroupExampleInput" value={this.state.description} onChange={this.handleChange}></textarea>
            <div className="Row">
              <label htmlFor="priority">Priority</label>
              <select type="text" name="priority" className="browser-default custom-select custom-select-lg mb-3 update-todo-priority" id="formGroupExampleInput2" value={this.state.priority} onChange={this.handleChange}>
                <option defaultValue>Select one below</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </select>

            </div>
            <button type="button" className='btn-success update-todo' name='description' onClick={this.handleSave}>Save</button>
          </div>
        </form>
      </div>

    );
  }
}


export default EditToDo;
