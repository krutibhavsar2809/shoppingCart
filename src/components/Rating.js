import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { useCartContext } from '../context/Context';

const Rating = () => {
    const { filterState: { byRating }, filterDispatch } = useCartContext();

    const handleStar = (ratingValue) => {
        const payload =  byRating.map(rating => (
            rating.star <= ratingValue.star 
                ? { ...rating, filled: true }  // Fill all stars up to the clicked star
                : { ...rating, filled: false } // Reset stars after the clicked one to 'empty'
            )
        );
        filterDispatch({ type: 'BY_RATING', payload });
    }

    return (
        <div>
            {byRating.map((rating, index) => (
                <span role="button" key={index} onClick={() => handleStar(rating)}>
                    { rating.filled ? <FaStar /> :  <FaRegStar />}
                </span>
            ))}
        </div>
    )
}

export default Rating