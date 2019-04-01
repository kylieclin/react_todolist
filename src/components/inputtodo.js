import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            todo: '',
        }
        this.handleinput = this.handleinput.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handleinput(event){

        const {value} = event.target;

        this.setState({
            todo: value
        })

    }
    handlesubmit(event){
        event.preventDefault();
        this.props.callback({...this.state});

        this.setState({
            todo: ''
        })

    }
    render(){
        const {input, form, col} = this.props.classes;

        return(
            <div className={col}>
                <form onSubmit={this.handlesubmit} className={form}>
                    <input autoComplete="off" id={input} className={input} type="text" name="todo" value={this.state.todo} onChange={this.handleinput}/>
                    <label htmlFor={input}>Add Something To Do</label>
                </form> 
            </div>

        )
    }
}

export default Input;