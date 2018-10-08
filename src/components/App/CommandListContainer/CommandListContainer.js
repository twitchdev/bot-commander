import React from 'react'
import CommandList from './CommandList/CommandList'

import './CommandListContainer.css'

export default class CommandListContainer extends React.Component{
    constructor(props){
        super(props)

        this.state={
            expanded:this.props.panel,
            panel:this.props.panel
        }
    }

    expandCommands(){
        this.setState((prevstate)=>{
            return {expanded:!prevstate.expanded}
        })
    }

    render(){
        return (
            <div className='wrapper'>
                <div className='header'>
                    <div className='header-text'>
                        Bot Commander
                    </div>
                    {!this.state.panel ? 
                        <div className="header-expand-toggle" onClick={()=>this.expandCommands()}>
                            {this.state.expanded ? 'expanded': 'hidden'}
                        </div>
                        :
                        <div>
                        </div>
                    }

                </div>
                {this.state.expanded ? 
                    this.props.commands ? 
                        this.props.commands.map((v,i)=>{
                            return (<CommandList key={i} command={v} />)
                        })
                    : ''
                : ''
                }
            </div>
        )
    }
}