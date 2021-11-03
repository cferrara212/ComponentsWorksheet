import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

function App(){
    return(
        <div className="container-fluid">
            <TitleBar />

        </div>
    )
}

export default App;