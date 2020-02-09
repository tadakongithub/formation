import React from 'react';
import './Member.css'

class Member extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {player: ''};
    }

    handleChange(e){
        this.setState({player: e.target.value});
    }

    handleSubmit(e){
        
    }

    render(){
        return(
            <div className="member-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="player" value={this.state.player} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Member;