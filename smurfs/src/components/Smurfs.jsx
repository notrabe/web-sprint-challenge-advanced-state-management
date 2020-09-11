import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/smurfsAction'
import Home from './Home'


const Smurfs = ({ data }) => {

    return (
        <div>
            <h2>{data.name}</h2>
        </div>
    )
}

export default Smurfs