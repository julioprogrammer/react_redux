import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro, { Segundo } from './component';

ReactDOM.render(
    <div>
        <Primeiro value="Eita" />
        <Segundo value="Caralho" />
    </div>
, document.getElementById('app'));