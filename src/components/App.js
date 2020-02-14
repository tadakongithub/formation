import React from 'react';
import Formation from './Formation';
import Member from './Member';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {members: [], typedPlayer: '', formationPlayers: []};
    }

    handleSubmit(newMember){
        this.setState({members: this.state.members.concat(newMember)});
    }

    handleChange(typedPlayer){
        this.setState({typedPlayer: typedPlayer})
    }

    handleBlur(player){
        this.setState({formationPlayers: this.state.formationPlayers.concat(player)});
    }

    handleFocus(player){
        var arr = [...this.state.formationPlayers];
        var index = arr.indexOf(player);
        if(index !== -1){
            arr.splice(index, 1);
            this.setState({formationPlayers: arr});
        }
    }

    render(){
        return (
            <div>
                <Formation handleChange={this.handleChange} handleBlur={this.handleBlur} handleFocus={this.handleFocus}/>
                <Member handleSubmit={this.handleSubmit} members={this.state.members} typedPlayer={this.state.typedPlayer}
                formationPlayers={this.state.formationPlayers}/>
            </div>
        )
    }

}

export default App;