import React , {useState, useRef} from 'react';
import Editable from './Editable';
import './Member.css';

function Member (props) {

    const [newPlayer, setNewPlayer] = useState('');
    const [memberEdited, setMemberEdited] = useState('');//I don't know how I'm going to use this yet
    const [memberBeforeEdit, setMemberBeforeEdit] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        setNewPlayer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(newPlayer);
        setNewPlayer('');
    }

    const handleClick = (e) => {
        props.deleteClick(e.target.getAttribute('id'));
    }

    const setCurrentMemberToEdit = member => {
        setMemberBeforeEdit(member);
        setMemberEdited(member);
    }

    const swapOneMember = e => {
        props.swapOneMember(memberBeforeEdit, memberEdited);
    }


    const members = props.members;

    return (
        <div>
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <input type="text" value={newPlayer} onChange={handleChange}
                        placeholder="Create a list of players present today"/>
                </div>
            </form>
            
            <div className="member-list">
                {members.map(eachPlayer => {
                    if(eachPlayer === props.typedPlayer || props.formationPlayers.some((player)=>player===eachPlayer)){
                        return (
                            <div className="each-player-container">
                                <div className="in-formation each-player">
                                    <Editable memberEdited={memberEdited} member={eachPlayer}
                                    setCurrentMemberToEdit={setCurrentMemberToEdit} childRef={inputRef}>
                                        <input ref={inputRef} type="text" value={memberEdited}
                                        onChange={(e)=>setMemberEdited(e.target.value)}
                                        onBlur={swapOneMember}/>
                                    </Editable>
                                </div>
                                <div className="delete-container">
                                    <button className="mini ui orange button" id={eachPlayer} onClick={handleClick}>Delete</button>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="each-player-container">
                                <div className="out-of-formation each-player">
                                    <Editable memberEdited={memberEdited} member={eachPlayer}
                                    setCurrentMemberToEdit={setCurrentMemberToEdit} childRef={inputRef}>
                                        <input ref={inputRef} type="text" value={memberEdited}
                                        onChange={(e)=>setMemberEdited(e.target.value)}
                                        onBlur={swapOneMember}/>
                                    </Editable>
                                </div>
                                <div className="delete-container">
                                    <button className="mini ui orange button" id={eachPlayer} onClick={handleClick}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Member;