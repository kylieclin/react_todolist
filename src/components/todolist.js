import React, {Component} from 'react';

class Todolist extends Component{
    render(){
        const {todos, callback} = this.props;
        const {todolist, todocontent, deletebtn, col} = this.props.classes
        const returntodolist = todos.map((todo, index)=>{
            return(
                <div key={index} className={`${todolist} ${col}`}>
                    <span onClick={callback} className={deletebtn}><i className="material-icons">delete_forever</i></span>
                    <div className={todocontent}>{todo}</div>
                    
                </div>  
            )
        })
        return returntodolist
    }
}

export default Todolist;