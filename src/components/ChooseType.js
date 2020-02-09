import React from 'react';

class ChooseType extends React.Component {

    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e){
        this.props.handleButtonClick(e.target.value);
    }

    render(){
        return(
            <div className="choose-container">
                <button value="_4-2-2" onClick={this.handleButtonClick}>4-2-2</button>
                <button value="_4-3-3" onClick={this.handleButtonClick}>4-3-3</button>
                <button value="_4-2-3-1" onClick={this.handleButtonClick}>4-2-3-1</button>
            </div>
        )
    }
}

export default ChooseType;