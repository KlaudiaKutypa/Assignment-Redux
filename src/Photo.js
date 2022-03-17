import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './Counter';
import './Photo.css';


function Photo(){
    const photo = useSelector(state => state.photo)
    
return (
    <div className="Photo">
        {photo.map((img) => (
            <div className="Photo__pic" key={img.id}>
            <img src={img.image}></img>
            <Counter />
            </div>
        ))}
    </div>   
);
}

export default Photo; 