import React , { useState } from 'react'
import classes from './Header.module.css'
import logo from './restaurent.jpg'
import { useSelector , useDispatch} from 'react-redux'
import Orders from '../Orders/Orders'


const Header = props => {

    const selector = useSelector(state => state.total)

    const orders = useSelector(state => state.order)

    

    const orderItems = orders.filter(item => {

        if( item.quantity > 1) {
          return item
        } 
      })

    const [order , setOrder] = useState(false)

    const onClickCart = () => {

        setOrder(!order)
    }
    
    return (

        <React.Fragment>

            {order && <Orders order={orderItems} onClick={onClickCart} />}

            <div className={classes.headerWrapper}>

                <p className={classes.header}>ReactMeals</p>

                <button className={classes.button} onClick={onClickCart} > 🛒  Your Cart <span>{selector}</span></button>

            </div>

            <img src={logo} alt='logo' width='100%' height='300px'></img>

            <div className={classes.descriptionWrapper}>

                <h1> Delicious Food , Delivered to You </h1><br/>

                <p> In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine. Some restaurants serve all the major meals, such as breakfast, lunch, and dinner (e.g., major fast food chains, diners, hotel restaurants, and airport restaurants). Other restaurants may serve only a single meal (for example, a pancake house may only serve breakfast) or they may serve two meals (e.g., lunch and dinner). </p>
            </div>

        </React.Fragment>
    )
}


export default Header