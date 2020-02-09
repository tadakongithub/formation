import React from 'react';
import Formation from './Formation';
import Member from './Member';
import './App.css'

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Formation />
                <Member />
            </div>
        )
    }
}

export default App;
