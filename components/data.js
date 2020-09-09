import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"


// export const data = {
//         title: "Peanut Butter jelly",
//         ingredients: [
//             'Onions','Honey','G-nuts','Sim-sim'
//         ],
//         steps: [
//             'Pound the g-nut',
//             'Pound the sim-sim',
//             'Mix the pounded sim sim with the pounded g-nuts and steer'
//         ]
// }


const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5}) {
const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
        {createArray(totalStars).map((n, i) => (
        <Star 
            key={i} 
            selected={selectedStars > i}
            onselect={() => setSelectedStars(i+1)}
        />
        ))}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </>
  )
}

const Star = ({ selected = false }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onselect}/>
);
