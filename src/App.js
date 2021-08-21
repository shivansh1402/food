import React from 'react'
import Header from './Components/Header/Header';
import FoodPanel from './Components/FoodPanel/FoodPanel';
import { useDispatch } from 'react-redux'

function App() {

  const foodItems = [{
    foodName: 'samosa',
    description: 'tasty delicious',
    amount: 10,
    id: 'el1',
    quantity: 0
  },
  {
    foodName: 'pasta ',
    description: 'tasty delicious',
    amount: 10,
    id: 'el2',
    quantity: 0
  },
  {
    foodName: 'burger',
    description: 'tasty delicious',
    amount: 10,
    id: 'el3',
    quantity: 0
  },
  {
    foodName: 'momos',
    description: 'tasty delicious',
    amount: 10,
    id: 'el4',
    quantity: 0
  }]

  const dispatch = useDispatch()

  const QuantityHandler = (ids) => {

    foodItems.map( item => {

      if(item.id === ids) {
        item.quantity++
      }
    })

    const ord = foodItems.filter(item => {if(item.quantity > 0) return item} )

    dispatch({type: 'order' , value: ord})
  
  }

  dispatch({ type: 'quantity', value: QuantityHandler})
 

  return (

    <React.Fragment>

      <Header />
      <FoodPanel quantity={QuantityHandler} foodItems={foodItems} />

    </React.Fragment>

  );
}

export default App;
