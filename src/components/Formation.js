import React from 'react';
import ChooseType from './ChooseType';
import Pitch from './Pitch';
import './Formation.css';

class Formation extends React.Component {

    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {formationType: ""};
    }

    handleButtonClick(formationType){
        this.setState({formationType: formationType});
    }

    render(){
        return(
            <div className="formation-container">
                <ChooseType handleButtonClick={this.handleButtonClick}/>
                <Pitch formationType={this.state.formationType} />
            </div>
        )
    }
}

export default Formation;