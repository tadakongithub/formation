import React from 'react';

class Member extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {newPlayer: ''};
    }

    handleChange(e){
        this.setState({newPlayer: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state.newPlayer);
        this.setState({newPlayer: ''});
    }

    render(){

        const members = this.props.members;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newPlayer} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    {members.map(eachPlayer => {
                        if(eachPlayer === this.props.typedPlayer || this.props.formationPlayers.some((player)=>player===eachPlayer)){
                            return <div style={{color: "green"}}>{eachPlayer}</div>
                        } else {
                            return <div style={{color: "red"}}>{eachPlayer}</div>
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Member;