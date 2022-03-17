import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement } from './action'
import './Counter.css';

function Counter(){
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
return (
    <div className="Counter">
        <h2>Like {counter}</h2>
        <div className="Counter__btnbox">
        <button className="Counter__btnbox_btnlike" title="testingtitle" onClick={() => dispatch(increment())}></button>
        <button className="Counter__btnbox_btnunlike" title="testingtitle2"onClick={() => dispatch(decrement())}></button>
        </div>
    </div>   
);
}

export default Counter; 