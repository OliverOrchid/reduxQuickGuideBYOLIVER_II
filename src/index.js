// /*
// index.js
// */

// import {createStore} from 'redux'
// import {todoApp} from './reducers'


// //基于 todoApp 生成初始状态的 store，即所谓的“state-tree”

// //归根结底，每一款APP，都是多个UI组件所构成的， 既可以有通用的state，也可以有独享的state

// /*
// //为了便于说明，我们写出如下的伪代码 以 用来表示 state
// {
//   todos: [   //名为 todos 的属性 ， 且呈现为 数组
//     {text: 'Eat food',completed: true}, //第一个元素
//     {text: 'Exercise',completed: false}，//第二个元素
//   ],
  
//   visibilityFilter: 'SHOW_COMPLETED'  //名为 visibilityFilter 的属性
// }

// //This object is like a “model” except that there are no setters. This is so that different parts of the code can’t change the state arbitrarily, which causing hard-to-reproduce bugs.


// */


// const store = createStore(todoApp);  


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)