import React from 'react';
import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name,seller,price,stock,ratings,img,ratingsCount,shipping,quantity} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Bottle;