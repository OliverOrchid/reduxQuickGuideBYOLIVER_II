/*
    ./components/Todo.js

    Todo is a single todo item.
        onClick() is a callback to invoke when the todo is clicked.
        text: string is the text to show.
        completed: boolean is whether the todo should appear crossed out.
*/

import React from 'react'
import PropTypes from 'prop-types'

const Todo = (  { onClick, completed, text }    ) => 
(
    <li     onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}   
      >    
        {text}

    </li>
)


/*
   你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
   这个 prop 没有被提供时，会打印警告信息。
*/

Todo.propTypes = {  //L2
  onClick: PropTypes.func.isRequired,  //WTF?
  completed: PropTypes.bool.isRequired, //WTF?
  text: PropTypes.string.isRequired //WTF?
}



//导出Todo,便于后期调用
export default Todo

/*
Designing Presentational Components
Please see the following presentational components and their props emerge from this brief:

TodoList is a list showing visible todos.
    todos: Array is an array of todo items with { id, text, completed } shape.
    onTodoClick(id: number) is a callback to invoke when a todo is clicked.

Todo is a single todo item.
    text: string is the text to show.
    completed: boolean is whether the todo should appear crossed out.
    onClick() is a callback to invoke when the todo is clicked.

Link is a link with a callback.
    onClick() is a callback to invoke when the link is clicked.

Footer is where we let the user change currently visible todos.

App is the root component that renders everything else.

*/