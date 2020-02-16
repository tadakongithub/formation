import React from 'react';
import './Formation.css';

class Formation extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {player: '', activatedInput: ''};
    }

    componentDidUpdate(){
        var arr = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10", "n11"];
        if(arr.includes(this.props.duplicateCell)){
            document.getElementById(this.props.duplicateCell).value = '';
        }
    }

    handleChange(e){
        this.setState({player: e.target.value});
        this.props.handleChange(e.target.value);
    }

    handleBlur(){
        this.props.handleBlur(this.state.player, this.state.activatedInput);
    }

    handleFocus(e){
        this.setState({activatedInput: e.target.getAttribute('id')});
        this.setState({player: e.target.value});
        this.props.handleFocus(e.target.value);
    }

    render(){

        return (
            <div id="formation-container">
                <div className="top">
                    <input id="n1" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n2" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n3" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                </div>
                <div className="mid">
                    <input id="n4" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n5" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n6" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                </div>
                <div className="defend">
                    <input id="n7" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n8" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n9" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                    <input id="n10" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                </div>
                <div className="keeper">
                    <input id="n11" type="text" onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>
                </div>
            </div>
        )
    }
}

export default Formation;