import React from 'react';
import ToDo from './ToDo';

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
        {
        // conditional rendering below: if there's something in list, it will map items in list.
          this.props.todoList && this.props.todoList.map((item, index) => {
            return (
              <ToDo alert={item.alert} key={item.key} description={item.description} index={index} isEditing={item.isEditing}/>
            )
          })
        }
        </div>
      </div>


    );
  }
}




export default ListItem;
