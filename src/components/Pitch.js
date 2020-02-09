import React from 'react';
import FourFourTwo from './FourFourTwo';
import FourThreeThree from './FourThreeThree';
import FourTwoThreeOne from './FourTwoThreeOne';
import './Pitch.css';

class Pitch extends React.Component {

    render(){
        var formationType = this.props.formationType;

        switch (formationType){
            case "_4-2-2":
                return <FourFourTwo />;
                break;
            case "_4-2-3-1":
                return <FourTwoThreeOne />;
                break;
            case "_4-3-3":
                return <FourThreeThree />;
                break;
            default:
                return (null);
        }
    }
}

export default Pitch;