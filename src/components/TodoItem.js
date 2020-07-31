import React, { Component } from 'react'
import propTypes from 'prop-types'

class TodoItem extends Component {
  state = {  }

  getStyle = () => {
    return  {
      background: '#f4f4f4',
      padding:'10px',
      borderBottom:'1px #ccc dotted',
      textDecoration: (this.props.todo.completed)? 'line-through':'none'
    }
  }
  
  

  render() { 
    const{id,title} = this.props.todo;
    return ( 
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
     );
  }
}

//propTypes
TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius:'50%',
  cursor:'pointer',
  float: 'right' 
}
//propTypes
TodoItem.propTypes={
  
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired
}
 
 
export default TodoItem;