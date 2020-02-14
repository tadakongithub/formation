import React from 'react';

class Formation extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {player: ''};
    }

    handleChange(e){
        this.setState({player: e.target.value});
        this.props.handleChange(e.target.value);
    }

    handleBlur(){
        this.props.handleBlur(this.state.player);
    }

    handleFocus(e){
        this.props.handleFocus(e.target.value);
    }

    render(){
        return (
            <div>
                <input type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                <input type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                <input type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
            </div>
        )
    }
}

export default Formation;