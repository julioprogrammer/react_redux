import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName="Baitola">
        <Member name="Julio" />
        <Member name="Róger" />
        <Member name="Caio" />
        <Member name="Gui" />
    </Family>
, document.getElementById('app'));