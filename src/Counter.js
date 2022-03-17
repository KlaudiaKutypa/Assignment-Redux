import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement } from './action'
import './Counter.css';

function Counter(){
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
return (
    <div className="Counter">
        <h2>Likes {counter}</h2>
        <div className="Counter__btnbox">
        <button className="btnlike" onClick={() => dispatch(increment())}></button>
        <button className="btnunlike" onClick={() => dispatch(decrement())}></button>
        </div>
    </div>   
);
}

export default Counter; 