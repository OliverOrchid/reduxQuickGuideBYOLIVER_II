import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'



/*
Now it's time to hook up those presentational components to Redux by creating some containers. 

Technically, a container component is just a React component that uses store.subscribe() to read a part of the Redux state tree and supply props to a presentational component it renders. You could write a container component by hand, but we suggest instead generating container components with the React Redux library's connect() function.

To use connect(), you need to define a special function called "mapStateToProps" which describes how to transform the current Redux store(即 state-tree) into the props that you want to pass to a presentational component.

For example, VisibleTodoList needs to calculate todos to pass to the TodoList, so we define a function that filters the 
 "state.todos"  according to the state.visibilityFilter, and use this func  in  mapStateToProps



*/

const getVisibleTodos = (   todos,filter    )=> //根据过滤器，返回满足条件的 “特定todos的集合”
{
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t =>  !t.completed)
    }
}

// I:功能一  ： 实现筛选特定的 todo_item,最终形成 集合todos
const mapStateToProps = state =>  //return props ， 这些props即将被传到  the presentational component 进而被渲染呈现
{
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter) //根据过滤器，返回满足条件的 “特定todos的集合”
    }
}


/*
In addition to reading the state, container components can dispatch actions. 

In a similar fashion, you can define a function called mapDispatchToProps() that receives the dispatch() method and returns callback props that you want to inject into the presentational component. 

For example, we want the VisibleTodoList to inject a prop called onTodoClick into the TodoList component, and we want onTodoClick to dispatch a TOGGLE_TODO action
*/

// II:功能一  ： 允许用户更改 todo_iten的完成状态
const mapDispatchToProps = dispatch=>
{
    return{ //inject a prop called onTodoClick into the TodoList component
        onTodoClick: id=>
        {  
            dispatch(toggleTodo(id)) //we want onTodoClick to dispatch a TOGGLE_TODO action
        }
    }
}



/*

Finally, 首先利用react-redux.connect()函数 合并功能 I + II

        然后 把 presentational-components 和  Redux 真正的关联起来，以便于调用redux的各项功能

*/


const VisibleTodoList = connect
    (
        mapStateToProps,mapDispatchToProps)
    (
        TodoList)  //正如你所见，此处是把 ./components/TodoList.js 和 Redux关联起来了！！！ 而这，恰巧是cotainer-components的意义所在！

        
export default VisibleTodoList

/*
These are the basics of the React Redux API, but there are a few shortcuts and power options so we encourage you to check out its documentation in detail. 

*/








