import React from 'react';
import './FourThreeThree.css';

class FourThreeThree extends React.Component {

    render(){
        return (
            <div className="each-formation">
                <div className="top">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div className="mid">
                    <input type="text"/>
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

export default FourThreeThree;