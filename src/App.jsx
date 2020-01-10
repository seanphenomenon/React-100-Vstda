import React, { Component } from 'react';
import NewItem from './NewItem';
import ListItem from './ListItem'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       newitem:'',
      listitem :[]
  }
  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleOnClick = this.handleOnClick.bind(this);
  }

handleOnChange (event){
// this.setState({
//   newitem: event.target.value})
console.log(event)
}

// addToList(newitem){
//   let listItemsArray = this.state.listitem;
//     listItemsArray.push(this.state.newitem)
//     this.setState ({
//       listitem
//     })
//   }

handleOnClick(event){
  console.log('I was clicked')

  // attach priority level to new item

  // push new item into list item array and populate list

  this.setState({

  })
  event.preventDefault();
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
              <NewItem value ={this.state.newitem} onChange={this.handleOnChange} onClick ={this.handleOnClick}/>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-header">
                View Todos
                  </div>
              <ListItem />
               </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
