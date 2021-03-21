import React from 'react'
import './App.css';
import RootRouter from './routers/index';
import {firebase, db, auth} from './services/firebase'

function App() {
    return (
        <div>
            <div></div>
            <RootRouter/>
        </div>
    );
}

export default App;
