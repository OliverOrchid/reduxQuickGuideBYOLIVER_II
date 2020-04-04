/*
    ./componnets/Footer.js

Footer is where we let the user change currently visible todos.
*/

import React from 'react'
import FilterLink from "../containers/FilterLink"
import {VisibilityFilters} from '../actions'

const Footer = (    ) =>
(

    <p>
        Show:
            <FilterLink filter = {VisibilityFilters.SHOW_ALL}>All</FilterLink>
            {","}

            <FilterLink filter = {VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            {","}

            Show:<FilterLink filter = {VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            {","}        

      </p>
)

export default Footer


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