import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos=[],
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleNewToDoChange = this.handleNewToDoChange.bind(this)
  }

handleNewToDoChange(event) {
  this.setState ({
   todos.target.value
  });
}

handleOnClick(event){
  this.setState({
  });

}


  render() {


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

              <div className="card-body">
                <h5 className="card-title">I want to...</h5>
                <div className="form-group shadow-textarea">
                  <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." value= {this.state.todos} onChange={this.handleNewToDoChange}></textarea>
                </div>

                <h5>How much of a priority is this?</h5>
                <select className="browser-default custom-select custom-select-lg mb-3">
                  <option selected>Select a priority</option>
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </select>
                <a href="#" className="btn btn-primary btn-block" onClick={this.handleOnClick}>Add</a>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-header">
                View Todos
                </div>


          <ul className="list-group">
                <li className="list-group-item">Exercise</li>
                <li className="list-group-item">Groceries</li>
                <li className="list-group-item">Doctors Appointment</li>
                <li className="list-group-item">Clean Garage</li>
                <li className="list-group-item">Car wash</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
