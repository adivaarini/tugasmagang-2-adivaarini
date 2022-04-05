import React from 'react';
import Login from './components/Login';
import Daftar from './components/Daftar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Login }
        /> <
        Route path = "/daftar"
        component = { Daftar }
        /> <
        /Switch> <
        /BrowserRouter>

        <
        /div>
    );
}

export default App;