import React , { useContext , useState} from 'react'
import Modal from '../UI/Modal'
import FoodDescription from '../FoodPanel/FoodDescription'
import classes from './Orders.module.css'
import { useSelector , useDispatch} from 'react-redux'




const Orders = props => {

    const [success , setSuccess] = useState(false)

    const orderHandler = () => {
        setSuccess(!success)
    }

    const quantity = useSelector(state => state.quantity)


     if(success)  { return(

            <Modal onClick={props.onClick}>
                <h1> You have sucessfully placed your order!!</h1>
                <button onClick={props.onClick} className={classes.button} >okay!</button>
            </Modal>
        )
    }

    else if( props.order.length === 0){

        return (

            <Modal onClick={props.onClick}>
                <p> you have not added any item</p>
            </Modal>
        )
    } else {

    return(

        <Modal onClick={props.onClick}>

            {props.order.map( item => { return <FoodDescription totalFood={quantity} id={item.id} key={item.id} foodName={item.foodName} description={item.description} amount={item.amount} quantity={item.quantity} /> })}

             <button className={classes.button} onClick={orderHandler}> order food</button>
        </Modal>
    )}
}

export default Orders