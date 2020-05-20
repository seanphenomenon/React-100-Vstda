import React, { Component } from 'react';
import NewItem from './NewItem';
import ListItem from './ListItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: '',
      todoList: [],
      isEditing: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getAlert = this.getAlert.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleDelete(todoDescription) {
    // below creates copy of current todoList state.
    let newList = [...this.state.todoList]
    // filter function below will be used to create new array with descriptions not equal to item. description.
    let updatedList = newList.filter(item => item.description != todoDescription);

    this.setState({
      todoList: updatedList
    });

  }

  handleEdit(index) {

    const list = [...this.state.todoList];

    // iterates through object looking for index property. If false, isEditing becomes true when edit button is clicked.

    for (let i = 0; i < list.length; i++) {

      if (i === index) {
        list[i].isEditing = true;
      }

      // below targeted isEditing property in Array Object

      // if (newList[index]["isEditing"] == false){
      //   newList[index]["isEditing"] = true;
      // }else {
      //    newList[index]["isEditing"] = false;
      // }

    }
    //  set state below updates the list
    this.setState({
      todoList: list
    });
    console.log('The Edit Button was clicked')
  }


  handleSave(oldDescription, description, priority) {
    const list = [...this.state.todoList];
    const newItem = {
      key: new Date().getMilliseconds(),
      description: description,
      priority: priority,
      alert: this.getAlert(priority),
      isEditing: false

    };
    // iterates through object looking for description value
    for (let i = 0; i < list.length; i++) {


      if (list[i].description === oldDescription) {
        list.splice(i, 1, newItem);
      }
    }

    this.setState({
      todoList: list
    });

  }



  // Below will set the priority color of each todo item in the list.
  getAlert(priority) {

    let bgcolor = '';
    if (priority === '1') {
      bgcolor = 'alert alert-success';
    } else if (priority === '2') {
      bgcolor = 'alert alert-warning';
    } else {
      bgcolor = 'alert alert-danger';
    }
    return bgcolor;
  }

  addToDo(event) {
    event.preventDefault();

    // Below will iterate through the list/makes copy of todolist. isEditing is for when you need to render the new editing component that you will create for the list
    let newList = [...this.state.todoList];
    let newItem = {
      key: new Date().getMilliseconds(),
      description: this.state.description,
      priority: this.state.priority,
      alert: this.getAlert(this.state.priority),
      isEditing: false,
    };
    console.log(newList)

    // below clears text area after input below
    // once add button is clicked, it will take whatever the description and priority is, clear textarea, and pass new todo as object to list.

    newList.push(newItem);

    this.setState({
      todoList: newList,
      description: '',
      priority: ''
    });
  }

  render() {

    return (
      <div className='container-fluid'>
        <h1> Very Simple Todo App</h1>
        <h4> Keep track of all your daily tasks </h4>
        <hr />

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Add New Todo
                </div>
              <NewItem
                description={this.state.description}
                priority={this.state.priority}
                handleChange={this.handleChange}
                addToDo={this.addToDo} />
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-header">
                View Todos
                  </div>
              <ListItem
                todoList={this.state.todoList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                description={this.props.description}
                handleSave={this.handleSave}
                handleChange={this.handleChange}
                getAlert={this.getAlert} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
