import React from 'react'
import { uniqueId } from "../../util/util";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTodo = Object.assign({}, { id: uniqueId() }, this.state);
    this.props.receiveTodo(newTodo);
  }

  render() {
    return (<form onSubmit={ this.handleSubmit }>
      <label>Title
        <input value={ this.state.title }
               onChange={ event => this.setState({ title: event.target.value }) }/></label>
      <label>Body
        <input value={ this.state.body }
               onChange={ event => this.setState({ body: event.target.value }) }/></label>
      <button className="primary">Create</button>


    </form>)
  }


}

export default TodoForm 