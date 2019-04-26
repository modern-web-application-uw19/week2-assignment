import React from 'react';

export default class AuthorBio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          todos: []
          // newTodo: ''
      };
  }

  render() {

    return (
        <div>
            <label htmlFor="new-todo">Add Todo</label>
            <input
                id="new-todo"
                onChange={this.onChange}
                value={this.state.newTodo}
            />
            <button onClick={this.addTodo}>Add</button>
            <ul>
                {}
            </ul>
        </div>
    );
}


}
