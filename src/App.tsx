import React from 'react';
import { Bar } from './iconBar';
import './App.css';
import { createMuiTheme } from '@material-ui/core';


function App() {
    return (
        <Bar notifications={10} mail={5} avatarPath="me.jpg" />
    );
}

export default App;
