import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css';
import  {addToLS, getStoredCart, removeFromLS } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    //load cart from local storage

    useEffect(()=>{
        console.log('called useEffect',bottles.length);
        if (bottles.length >0){
            const storedCartID = getStoredCart();
        console.log(storedCartID,bottles);

        const savedCart = [];
        for (const id of storedCartID){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id ===id);
            if (bottle){
                savedCart.push(bottle);
            }
        }

        console.log('saved cart', savedCart);
        setCart(savedCart);
    }
    },[bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        //visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        //remove from LS
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>
            <div>
                <Cart cart={cart} key={cart.id} handleRemoveFromCart = {handleRemoveFromCart} ></Cart>
            </div>
            
            
            <div className='bottles-container'>
            {   
                bottles.map(bottle =>
                <Bottle
                key = {bottle.id}
                bottle = {bottle}
                handleAddToCart = {handleAddToCart} 
                ></Bottle>)
             }

            </div>
        </div>
    );
};


export default Bottles;