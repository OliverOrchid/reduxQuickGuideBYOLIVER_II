/*
    ./components/TodoList.js

TodoList is a list showing visible todos.
    todos:  is an array of todo items with  shape of { id, text, completed }.
    onTodoClick(id: number): is a callback to invoke when a todo is clicked.
*/

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo' //导入Todo


/*
map() 方法创建一个新数组，生成的新数组中的新元素 是 旧元素调用所提供的函数后的返回值

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

MoreInfo: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/


const TodoList = (  {todos,onTodoClick}  ) => 
(
    <ul>
        {todos.map(  //todos 即：todo_list列表集合而已，是一个数组， 另见 array.map()库函数
                    (todo,index) =>(  //todo 就是 todos数组的 每个元素
                            <Todo   key={index} 
                                    {...todo} //对象展开符， 另见 【./reducers.js L30】，需注意 此组件按功能被归类到 展示组件，此时
                                              //还未与数据库绑定，故而在具体的UI中无法展示具体的数据
                                    onClick={()=>onTodoClick(index)} //另见【./components/Todo.js L10】
                              /> //Todo 请见 L11  
                        )

                )
        }
        </ul>
)


//-------------------------------------------------------

TodoList.propTypes={
    todos:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired
        }).isRequired
    ).isRequired,

    onTodoClick:PropTypes.func.isRequired
}

export default TodoList


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
























