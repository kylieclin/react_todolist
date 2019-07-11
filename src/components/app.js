import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import axios from 'axios';
import '../assets/css/app.scss';
import Todolist from './todolist/todolist';
import Input from './todoinput/inputtodo';

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            todolist: []
        }
        this.addtodo = this.addtodo.bind(this);
        this.deletetodo = this.deletetodo.bind(this);
    }
    componentDidMount(){
        this.getData();
    }
    async getData(){
        debugger;
        const resp = await axios.get('/api/todo_items');
        console.log(resp.data.data)
        try{
            this.setState({
                todolist: resp.data.data
            })

        }catch(error){
            this.errorHandle()
        }
    }
    async addtodo(todo){
        await axios.post('/api/todo_items', todo);

        try{
            this.getData()
        } catch(error){
            this.errorHandle()
        }
    }
    async deletetodo(id){
        await axios.delete(`/api/todo_items/${id}`);

        try{
            this.getData()
        }catch(error){
            this.errorHandle()
        }

    }
    errorHandle(){
        this.setState({
            error: "Error: Unable to retrieving data"
        });
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
                <h3>{this.state.error}</h3>
                <Todolist todos={this.state.todolist} callback={this.deletetodo} classes={classnames}/> 


            </div>
        </div>
        )
    }
};

export default App;
