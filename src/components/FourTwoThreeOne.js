import React from 'react';
import './FourTwoThreeOne.css';

class FourTwoThreeOne extends React.Component {

    render(){
        return (
            <div className="each-formation">
                <div className="top">
                    <input type="text"/>
                </div>
                <div className="second-top">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div className="mid">
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div className="def">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div className="gol">
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

export default FourTwoThreeOne;