import React from 'react'
import ConfigCommand from './ConfigCommand/ConfigCommand'

import './ConfigContainer.css'

export default class ConfigContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            commands:this.props.commands
        }
    }

    onSubmit(event) {
        event.preventDefault()

        if(this.state.commands.length <= 5){
            this.setState(prevState=>{
                let commands = prevState.commands
                commands.push({
                    command:this.state.command,
                    description:this.state.description,
                    date:new Date()
                })
                return {
                    commands
                }
            })
            this.commandInput.value = ""
            this.descriptionInput.value = ""
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    deleteCommand(key){
        this.setState(prevState=>{
            return{
                commands:prevState.commands.filter(old=>old.date != key)}
            }
        )
    }

    render(){
        return(
            <div className="config-container-container"> 
                <div className="config-container-form">
                    <form onSubmit={(e)=>this.onSubmit(e)}>
                        <label>
                            Command:
                            <input 
                                name="command" 
                                type="text" 
                                placeholder="Command" 
                                onChange={(e)=>this.handleInputChange(e)} 
                                ref={el=>this.commandInput = el}
                            />
                        </label>
                        <br />
                        <label>
                            Description:
                            <input 
                                name="description" 
                                type="text" 
                                placeholder="Description" 
                                onChange={(e)=>this.handleInputChange(e)} 
                                ref={el=>this.descriptionInput = el}
                            />
                        </label>
                        <br />
                        <input type="submit" disabled={!this.state.command || !this.state.description} value="Add" />
                    </form>
                    <hr />
                </div>
                <div className="config-container-commands">
                    {this.state.commands.map((v,i)=>{
                        return <ConfigCommand command={v} key={i} commandKey={v.date} delete={(key)=>this.deleteCommand(key)}/>
                    })}
                </div>
                <div className="config-container-footer">
                    <input 
                        type="button" 
                        onClick={()=>this.props.saveConfig(this.state.commands)} 
                        disabled={this.state.commands.length===0} 
                        value="Save commands!"
                    />
                </div>
            </div>
        )
    }
}