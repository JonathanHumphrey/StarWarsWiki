import React, {useState} from 'react'

export default function Information({information, queryType, starShips}) {
    if (queryType === 'people') {
        return (
            <div className='information'>
                <div className='bio'>
                    <h1>Bio: </h1>
                    <p>Full Name: {information.name}</p>
                    <p>Height: {information.height}cm</p>
                    <p>Weight: {information.mass}Kg ({(information.mass * 2.2).toFixed(2)}Lbs)</p>
                </div>
                <div className='starShips'>
                    <h1>Ships Owned: </h1>
                    {console.log(starShips)}
                    {/* {starShips?.map((ship) => {
                        return (
                            <p>{ship.name}</p>
                        )
                    })} */}
                </div>
            </div>
        )
    } else if (queryType === 'starships') {
        return (
            <div className='bio'>
                {console.log(information)}
                <p>Ship Name: {information.name}</p>
                <p>Cargo Capacity: {information.cargo_capacity}</p>
                <p>Cost: {information.cost_in_credits}</p>
                <p>Manufacturer: {information.manufacturer}</p>
                <p>Class: {information.starship_class}</p>
            </div>
        )
    } else if (queryType === 'planets') {
        return (
            <div>

            </div>
        )
    } else {
        console.log(queryType)
        return null
    }
    
}
