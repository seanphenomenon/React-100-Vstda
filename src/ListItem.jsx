import React from 'react';
import ToDo from './ToDo';

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.todoList.length === 0){
      return(
        <div className='alert alert-primary' role='alert'>
          <h6><strong> Welcome to Very Simple Todo App!</strong></h6>
          <p>Get started now by adding a new todo on the left</p>
        </div>
      );
    } else {

    return (
      <div>
        <div>
        {
        // conditional rendering below: if there's something in list, it will map items in list.
          this.props.todoList && this.props.todoList.map((item, index) => {
            return (
              <ToDo alert={item.alert} key={item.key} description={item.description} index={index} isEditing={item.isEditing} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}/>
            )
          })
        }
        </div>
      </div>


    );
  }
}
}




export default ListItem;
