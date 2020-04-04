/*
    ./containers/FilterLink.js

FilterLink gets the current visibility filter and renders a Link.
    >filter: string , is the visibility filter it represents.
*/

import{ connect } from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'



const mapStateToProps = (   state,ownProps    ) =>
{
    return{
        active:ownProps.filter === state.visibilityFilter  //active 最终为 布尔值
    } //返回一个布尔值
}


//
const mapDispatchToProps = (    dispatch,ownProps   ) =>
{
    return {
        onClick:() => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}


const FilterLink = connect
    (
        mapStateToProps, mapDispatchToProps)
    (
        Link)

export default FilterLink


/*
VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.

FilterLink gets the current visibility filter and renders a Link.
    filter: string is the visibility filter it represents.
*/