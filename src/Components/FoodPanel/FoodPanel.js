import classes from './FoodPanel.module.css'
import FoodDescription from './FoodDescription'
import React , { useState } from 'react'


const FoodPanel = props => {

    
    const [total , setTotal] = useState(1)

    const totalFoodHandler = (id) => {

       props.quantity(id)

    }
    

    return(


        <div className={classes.container}>

            {props.foodItems.map( item => <FoodDescription quantity={item.quantity} id={item.id} key={item.id} foodName={item.foodName} description={item.description} amount={item.amount} totalFood={totalFoodHandler} /> )}

            
        </div>
        
    )
}

export default FoodPanel