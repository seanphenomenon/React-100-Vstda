import React from 'react';

class ToDo extends React.Component{

  constructor(props){
  super(props);
  }


  render(){

    return(
      <div className={this.props.alert}>
        <div className='row'>
          <input className='col-sm-4 col-md-4 col-lg-4'type='checkbox' id="checkbox"/>
         <div className='col-sm-4 col-md-4 col-lg-4'>{this.props.description}</div>
          <div className='col-sm-3 col-md-3 col-lg-3'>
            <button type='button' name ={this.props.description} className="far fa-edit edit-todo" id="edit-icon" onClick={()=> this.props.handleEdit(this.props.index)}></button>
            <button type='button' name={this.props.description} className="fas fa-trash-alt delete-todo" id="trash-icon" onClick={()=> this.props.handleDelete(this.props.description)}></button>

          </div>
          <div>
          </div>

          {/*
            <div className='row'>
              {
                this.props.isEditing && <EditToDo handleChange={this.props.handleChange} />
              }
            </div>
          */}
        </div>
        </div>


    );
  }
}

export default ToDo;
