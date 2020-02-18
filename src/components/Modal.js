import React from 'react';

class Modal extends React.Component {
    render(){
        return (
            <div className="ui modal" id="modal">
                <i className="close icon"></i>
                <div className="header">
                    Before you start
                </div>
                <div className="content">
                    <div>Make sure you add a player to the right hand-side player list before you put her/his name on the formation.</div>
                </div>
                <div className="actions">
                    <div className="ui positive right labeled icon button">
                    Got it!
                    <i className="checkmark icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;