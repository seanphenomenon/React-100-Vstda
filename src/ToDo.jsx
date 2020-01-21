import React from 'react';

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      isChecked: false,
    };
    this.handleCheck=this.handleCheck.bind(this)
  }

  handleCheck(){
    // if check is false, set state will give us the opposite of that.
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {

    return (

      <div className={this.props.alert}>
        <div className='row'>
          <input className='col-sm-4 col-md-4 col-lg-4 ' type='checkbox' id="checkbox" onClick={this.handleCheck}/>
          <div className={this.state.isChecked ? 'col-sm-4 col-md-4 col-lg-4 strike-through' :'col-sm-4 col-md-4 col-lg-4' }>{this.props.description}</div>
          <div className='col-sm-3 col-md-3 col-lg-3'>
            <button type='button' name={this.props.description} className="far fa-edit edit-todo" id="edit-icon" onClick={() => this.props.handleEdit(this.props.index)}></button>
            <button type='button' name={this.props.description} className="fas fa-trash-alt delete-todo" id="trash-icon" onClick={() => this.props.handleDelete(this.props.description)}></button>
            {/*  look at how you identified the description here to be deleted and passed it up to parent. do similar thing to edit to do.  */}
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
