import classes from './FoodDescription.module.css'
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'


const FoodDescription = props => {

    const [quantity, setQuantity] = useState(props.quantity)

    const dispatch = useDispatch()

    const AddHandler = () => {

        setQuantity(prevValue => { return prevValue + 1 })

        dispatch({ type: 'totalInc', value: quantity })

        props.totalFood(props.id)

    }

    const handler = (e) => {

        setQuantity(e.target.value)
    }


    return (

        <div className={classes.food}>

            <div className={classes.descrip}>

                <p>{props.foodName}</p>
                <p>{props.description}</p>
                <p> 💲 {props.amount}</p>

            </div>

            <div className={classes.quantity}>
                <input type='number' value={quantity} className={classes.input} onChange={handler}></input>
                <button onClick={AddHandler} className={classes.button} > + Add </button>
            </div>

        </div>
    )
}

export default FoodDescription