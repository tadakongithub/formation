import React from 'react';
import Formation from './Formation';
import Member from './Member';
import Modal from './Modal';
import './App.css';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.replaceMember = this.replaceMember.bind(this);
        this.state = {
            members: [], 
            typedPlayer: '', 
            formationPlayers: [], 
            duplicateCell: 'n0', 
            duplicateValue: '',
            deleteCell: 'n0',
            memberToDelete: ''
        };
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
        if(!this.state.members.includes(player)){
            this.setState({deleteCell: duplicateCell});
        } else {
            if(!this.state.formationPlayers.includes(player)){
                this.setState({formationPlayers: this.state.formationPlayers.concat(player)});
            } else {
                this.setState({duplicateCell: duplicateCell});
                this.setState({duplicateValue: player});
            }
        }
        this.setState({typedPlayer: ''});
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
        this.setState({deleteCell: ""});
    }

    deleteClick(memberToDelete){
        var array = [...this.state.members];
        var index = array.indexOf(memberToDelete);
        if(index !== -1){
            array.splice(index, 1);
            this.setState({members: array});
        }
        var array = [...this.state.formationPlayers];
        var index = array.indexOf(memberToDelete);
        if(index !== -1){
            array.splice(index, 1);
            this.setState({formationPlayers: array});
        }
        this.setState({memberToDelete: memberToDelete});
    }

    replaceMember(beforeEdit, afterEdit){
        var array = [...this.state.members];
        var index = array.indexOf(beforeEdit);
        if(index !== -1){
            array[index] = afterEdit;
            this.setState({members: array});
        }
    }

    render(){
        return (
            <div className="app-container">
                <Formation handleChange={this.handleChange} handleBlur={this.handleBlur} 
                handleFocus={this.handleFocus} duplicateCell={this.state.duplicateCell}
                duplicateValue={this.state.duplicateValue} deleteCell={this.state.deleteCell} 
                members={this.state.members} memberToDelete={this.state.memberToDelete}/>
                <Member handleSubmit={this.handleSubmit} members={this.state.members} typedPlayer={this.state.typedPlayer}
                formationPlayers={this.state.formationPlayers} deleteClick={this.deleteClick} replaceMember={this.replaceMember}/>
                <Modal />
            </div>
        )
    }

}

export default App;