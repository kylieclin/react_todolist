import React from 'react';

export default props=>{
    const {id, title, detail} = props;
    const {todolist, todocontent, deletebtn, col} = props.classes
    return(
        <div className={`${todolist} ${col}`}>
            <span onClick={()=>{props.delete(id)}} className={deletebtn}><i className="material-icons">delete_forever</i></span>
            <div className={todocontent}>{title}</div>                  
        </div>  
    )
}