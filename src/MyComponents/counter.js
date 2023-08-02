import React from 'react'
import { useSelector } from 'react-redux'

const counter = () => {
    const count = useSelector(state => state);
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}
export default counter;