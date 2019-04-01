import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';
import Todolist from './todolist';
import Input from './inputtodo';

let id = 0;

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            todolist: []
        }
        this.addtodo = this.addtodo.bind(this);
        this.deletetodo = this.deletetodo.bind(this);
    }
    addtodo(todolist){
        todolist.id = id++;

        this.setState({
            todolist: [todolist.todo, ...this.state.todolist]
        })
        
    }
    deletetodo(todolist){
        //delete by id
        this.setState({
            todolist: []
        })
    }
    render(){

        const classnames = {
            todolist: "todolist",
            todocontent: 'todocontent',
            deletebtn: 'delete',
            input: 'todoinput',
            form: 'input-field',
            col: 'col s12 m8'
        }
        return(
        <div className="container">
        <div className="app col s12 m8">
            <div className="header">
                <h1 className="center">Todo</h1>
            </div>
            <Input callback={this.addtodo} classes={classnames}/>
            <div className="todos">
               <Todolist todos={this.state.todolist} callback={this.deletetodo} classes={classnames}/> 
            </div>
            
        </div>
        </div>
        )
    }
}
 ;

export default App;
