import React from 'react';

class ToDo extends React.Component{
  constructor(props){
  super(props);
  }

  render(){
    return(
      <div className={this.props.alert}>
        <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-4'>{this.props.index}</div>
         <div className='col-sm-4 col-md-4 col-lg-4'>{this.props.description}</div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <button>edit</button>
            <button>delete</button>
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
