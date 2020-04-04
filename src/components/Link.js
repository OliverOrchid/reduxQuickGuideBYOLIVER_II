/*
    ./components/Link.js

Link is a link with a callback.
    onClick() is a callback to invoke when the link is clicked.

*/

import React from 'react'
import PropTypes from 'prop-types'


const Link= (   {active,chidren,onClick}    ) =>
{
    if(active){ //若为真
        return  <span>{chidren}</span>  
    }

    return( //若为假
        <a  href="" 
            onClick={e=>{e.preventDefault() , onClick()}}            
          >
            {chidren}
          </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    chidren: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default Link
    
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