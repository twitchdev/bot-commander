import React from 'react'
import './ConfigCommand.css'

export default class ConfigCommand extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="config-command-container">
                <div className="config-command-actions" onClick={()=>this.props.delete(this.props.commandKey)}>
                    Delete
                </div>
                <div className="config-command-command">
                    Command: {this.props.command.command}<br/>
                    Description: {this.props.command.description}
                </div>
            </div>
        )
    }
}