import React, {Component} from 'react';
import Row from './todorow';

class Todolist extends Component{
    render(){
        const {todos, callback} = this.props;     
        const returntodolist = todos.map((todo)=>{
            return <Row {...todo} key={todo.id} delete={callback} classes={this.props.classes}/>
        })
        return returntodolist
    }
}

export default Todolist;