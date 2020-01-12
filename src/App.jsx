import React, { Component } from 'react';
import NewItem from './NewItem';
import ListItem from './ListItem'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description:'',
      priority: '',
      todoList:[],
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

handleChange (event){
this.setState({
  [event.target.name]: event.target.value});
}

// addToList(newitem){
//   let listItemsArray = this.state.listitem;
//     listItemsArray.push(this.state.newitem)
//     this.setState ({
//       listitem
//     })
//   }

// return type methods below. we are returning the string of each todo color in the list.
getAlert(priority) {
  let bgcolor= '';
  if (priority === '1'){
    bgcolor = 'alert alert-success';
  } else if (priority === '2'){
    bgcolor = 'alert alert-warning';
  } else {
    bgcolor= 'alert alert-danger';
  }
  return bgcolor;
}

  addToDo(event){
    event.preventDefault();

    // Below will iterate through the list/makes copy of todolist. TO DO: isEditing is for when you need to render the new editing component that you will create for the list
    let newList = [...this.state.todoList];
    let newItem = {
      key: new Date().getMilliseconds(),
      description: this.state.description,
      priority: this.state.priority,
      alert: this.getAlert(this.state.priority),
      isEditing: false
    };

    // below clears text area after input below
    // once you click add, it will take whatever is in description and priority and clears text area after add a new todo.

    newList.push(newItem);
    this.setState({
      todoList: newList,
      description: '',
      priority: ''
    });
  }

render(){
  return (
  <div className='container-fluid'>
        <h1> Very Simple Todo App</h1>
        <h4> Track all of the things</h4>
        <hr />

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Add New Todo
                </div>
              <NewItem description={this.state.description} priority={this.state.priority} handleChange={this.handleChange} addToDo ={this.addToDo}/>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-header">
                View Todos
                  </div>
                    <ListItem todoList={this.state.todoList} />
                </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
