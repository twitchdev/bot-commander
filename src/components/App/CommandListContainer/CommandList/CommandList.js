import React from 'react'

import './CommandList.css'

export default class CommandList extends React.Component{
    constructor(props){
        super(props)

        this.state={
            expanded: false
        }
    }

    toggleDescription(){
        this.setState(prevState=>{
            return {
                expanded:!prevState.expanded
            }
        })
    }

    render(){
        return(
            <div className='command-container' onClick={()=>this.toggleDescription()}>
                <div className="command-header" >
                    <div className="command-command">
                        {this.props.command.command}
                    </div>
                    <div className="command-expand-toggle">
                        {this.state.expanded ? "Collapse" : "Expand"}
                    </div>
                </div>
                <div className="command-description">
                    {this.state.expanded ? this.props.command.description : ""}
                </div>
            </div>
        )
    }
}