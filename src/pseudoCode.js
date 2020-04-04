//pseudocode.js 即 伪代码示例

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//action_creater 示例代码
export function changeTextColor (yourInput, text_color){  
    return{ //返回一个字典
        type: CHANGE_TEXT,
        yourInput,
        text_color,
    };
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////

const ADD_TODO = 'Add_Todo'

// {
//     type:'ADD_TODO'，
//     text:'Build my first Redux APP'，
// }



//////////////////////////////////////////////////
//////////////////////////////////////////////////

function addTodo(text){  //this makes them portable and easy to test!
    return{
        type:'Add_Todo',
        text        
    }
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////

import{
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,

}from './actions'


function todoApp(state = initialState,action){  //One neat trick is to use the ES6 default arguments syntax to write this in a more compact way:

    //PASS

    return state
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////



function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
  }
  
  function todoApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: todos(state.todos, action)  //类似于Python的  切片赋值语法！！！ ， 西文冒号两侧的数据结构相同，那么 右侧值将会赋值给左侧
        })
      case TOGGLE_TODO:
        return Object.assign({}, state, {
          todos: todos(state.todos, action)  //类似于Python的  切片赋值语法！！！ ， 西文冒号两侧的数据结构相同，那么 右侧值将会赋值给左侧
        })
      default:
        return state
    }
  }


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

import {createStore} from 'redux'
import {todoApp} from './reducers'
const store = createStore(todoApp)

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }
  
  const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
  }

























