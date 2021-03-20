import React from 'react'
import './App.css';
import RootRouter from './routers/index';
import {firebase, db, auth} from './services/firebase'

function App() {
    return (
        <div className="App">
            <RootRouter/>
        </div>
    );
}

export default App;
