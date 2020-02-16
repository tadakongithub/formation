import React from 'react';
import Formation from './Formation';
import Member from './Member';
import './App.css';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {members: [], typedPlayer: '', formationPlayers: [], duplicateCell: 'n0'};
    }

    handleSubmit(newMember){
        if(!this.state.members.includes(newMember)){
            this.setState({members: this.state.members.concat(newMember)});
        }
    }

    handleChange(typedPlayer){
        this.setState({typedPlayer: typedPlayer})
    }

    handleBlur(player, duplicateCell){
        if(!this.state.formationPlayers.includes(player)){
            this.setState({formationPlayers: this.state.formationPlayers.concat(player)});
        } else {
            this.setState({duplicateCell: duplicateCell});
        }
    }

    handleFocus(player){
        var arr = [...this.state.formationPlayers];
        var index = arr.indexOf(player);
        if(index !== -1){
            arr.splice(index, 1);
            this.setState({formationPlayers: arr});
        }
        this.setState({typedPlayer: player});
        this.setState({duplicateCell: ""});
    }

    render(){
        return (
            <div className="app-container">
                <Formation handleChange={this.handleChange} handleBlur={this.handleBlur} 
                handleFocus={this.handleFocus} duplicateCell={this.state.duplicateCell}/>
                <Member handleSubmit={this.handleSubmit} members={this.state.members} typedPlayer={this.state.typedPlayer}
                formationPlayers={this.state.formationPlayers}/>
            </div>
        )
    }

}

export default App;