import React , {useState, useEffect} from 'react';

function Editable (props){

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if(props.childRef && props.childRef.current && isEditing === true){
            props.childRef.current.focus();
        }
    })

    const handleClick = e => {
        setIsEditing(true);
        props.setCurrentMemberToEdit(props.member);
    }

    return (
        <section>
            {isEditing ? (
                <div
                    onBlur={e => setIsEditing(false)}
                >
                    {props.children}
                </div>
            ) : (
                <div
                    onClick={handleClick}
                >
                    <span>
                        {props.member}
                    </span>
                </div>
            )}
        </section>
    )
}

export default Editable;