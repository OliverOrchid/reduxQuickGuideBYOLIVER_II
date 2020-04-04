/*
    ./reducers.js
*/

import {combineReducers} from 'redux'  //导入redux库
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
}from './actions'  //导入action.js 所定义的 四个常量

const {SHOW_ALL} = VisibilityFilters  //左右两侧相同的数据结构，则把右侧的值 赋给左侧

function visibilityFilter(state = SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter  //返回了一个 new_state
        default:
            return state  //如果无法匹配到之前的任一操作， 则默认返回 default_state
    }
}

function todos(state = [],action){
    switch(action.type){
        case ADD_TODO:
            return[
                ...state,  //对象展开符
                {
                    text:action.text,   //在原数组末尾追加一个新元素，即：添加一个新的待办事项！
                    completed:false,
                }
            ]

        case TOGGLE_TODO:
            return state.map( //依次传入todo_list的每一项todo，分别比较是否和传入的action.index满足严格等于的条件,更多请见array.map()
                (todo,index)=>{
                    
                    
                    if(index === action.index){
                        return Object.assign(
                            {   },  //不可省略！！！！
                            todo,
                            {   completed:!todo.completed   }
                        )
                    }
                    
                    //若 “index === action.index”语句为false，则原样返回当前todo项
                    return todo
                }
            )

        default:
            return state
    }
}

const todoApp = combineReducers(
    {
        visibilityFilter,
        todos,
    }
)

export default todoApp